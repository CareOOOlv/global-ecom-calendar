#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""修正气候数据：反映近年极端高温与热浪趋势，并修复明显的复制粘贴错误。"""

import re
from pathlib import Path

FILE = Path("C:/Users/54162/WorkBuddy/2026-06-29-15-40-05/global-ecom-calendar/src/data/regionData.ts")

# 每个区域的修正规则：region_id -> { month: { field: new_value } }
# subRegions 是整个数组字符串（含缩进）
CLIMATE_FIXES = {
    "us": {
        6: {
            "climate": "初夏炎热",
            "temperature": "20℃ ~ 35℃",
            "weatherDetail": "初夏升温，雷雨增多，西部热浪初现",
            "daylight": "日照最长 14-15h",
            "precipitation": "雷阵雨增多",
            "subRegions": """        subRegions: [
          { name: '美国', climate: '初夏炎热', temperature: '20℃~35℃' },
          { name: '加拿大', climate: '温和初夏', temperature: '12℃~26℃' }
        ],"""
        },
        7: {
            "climate": "极端高温",
            "temperature": "24℃ ~ 40℃",
            "weatherDetail": "盛夏酷热，热浪频发，西部山火风险高",
            "daylight": "日照最长 14-15h",
            "precipitation": "对流雨/干旱",
            "subRegions": """        subRegions: [
          { name: '美国', climate: '极端高温', temperature: '24℃~40℃' },
          { name: '加拿大', climate: '夏季炎热', temperature: '16℃~30℃' }
        ],"""
        },
        8: {
            "climate": "高温持续",
            "temperature": "22℃ ~ 38℃",
            "weatherDetail": "高温持续，南部湿热，西部仍多热浪",
            "daylight": "日照渐短 13-14h",
            "precipitation": "雷阵雨/干旱",
            "subRegions": """        subRegions: [
          { name: '美国', climate: '酷热持续', temperature: '22℃~38℃' },
          { name: '加拿大', climate: '夏末温暖', temperature: '14℃~28℃' }
        ],"""
        },
    },
    "russia": {
        5: {
            "climate": "春末转热",
            "temperature": "12℃ ~ 26℃",
            "weatherDetail": "气温快速回升，偶现干热风",
            "subRegions": """        subRegions: [
          { name: '俄罗斯西部', climate: '温暖干燥', temperature: '12℃~24℃' },
          { name: '乌克兰', climate: '温暖', temperature: '14℃~26℃' },
          { name: '波兰', climate: '温暖', temperature: '12℃~24℃' }
        ],"""
        },
        6: {
            "climate": "初夏炎热",
            "temperature": "18℃ ~ 30℃",
            "weatherDetail": "高温初现，西部干旱风险上升",
            "subRegions": """        subRegions: [
          { name: '俄罗斯西部', climate: '初夏炎热', temperature: '16℃~28℃' },
          { name: '乌克兰', climate: '夏季炎热', temperature: '18℃~30℃' },
          { name: '波兰', climate: '初夏温暖', temperature: '16℃~26℃' }
        ],"""
        },
        7: {
            "climate": "盛夏炎热",
            "temperature": "20℃ ~ 32℃",
            "weatherDetail": "热浪频发，森林火灾风险高",
            "subRegions": """        subRegions: [
          { name: '俄罗斯西部', climate: '盛夏炎热', temperature: '18℃~32℃' },
          { name: '乌克兰', climate: '盛夏炎热', temperature: '20℃~33℃' },
          { name: '波兰', climate: '夏季炎热', temperature: '18℃~30℃' }
        ],"""
        },
        8: {
            "climate": "夏末炎热",
            "temperature": "18℃ ~ 30℃",
            "weatherDetail": "高温持续，秋燥开始",
            "precipitation": "雷阵雨减少",
            "subRegions": """        subRegions: [
          { name: '俄罗斯西部', climate: '夏末炎热', temperature: '16℃~30℃' },
          { name: '乌克兰', climate: '夏末炎热', temperature: '18℃~31℃' },
          { name: '波兰', climate: '夏末温暖', temperature: '16℃~27℃' }
        ],"""
        },
        9: {
            "climate": "初秋仍暖",
            "temperature": "12℃ ~ 24℃",
            "weatherDetail": "秋老虎明显，温差加大",
            "subRegions": """        subRegions: [
          { name: '俄罗斯西部', climate: '初秋温暖', temperature: '10℃~22℃' },
          { name: '乌克兰', climate: '初秋温暖', temperature: '12℃~24℃' },
          { name: '波兰', climate: '秋凉', temperature: '10℃~20℃' }
        ],"""
        },
    },
    "europe": {
        5: {
            "climate": "春末转热",
            "temperature": "12℃ ~ 26℃",
            "weatherDetail": "气温快速攀升，南部已现热浪苗头",
            "subRegions": """        subRegions: [
          { name: '英国', climate: '温和转热', temperature: '10℃~23℃' },
          { name: '法国', climate: '初夏温暖', temperature: '12℃~24℃' },
          { name: '德国', climate: '温暖干燥', temperature: '12℃~24℃' },
          { name: '西班牙', climate: '初夏炎热', temperature: '16℃~28℃' },
          { name: '葡萄牙', climate: '初夏炎热', temperature: '16℃~28℃' }
        ],"""
        },
        6: {
            "climate": "初夏炎热",
            "temperature": "16℃ ~ 32℃",
            "weatherDetail": "高温初现，欧洲北部偶现热浪",
            "subRegions": """        subRegions: [
          { name: '英国', climate: '夏季炎热', temperature: '14℃~28℃' },
          { name: '法国', climate: '盛夏初现', temperature: '16℃~30℃' },
          { name: '德国', climate: '夏季炎热', temperature: '15℃~29℃' },
          { name: '西班牙', climate: '盛夏酷热', temperature: '20℃~35℃' },
          { name: '葡萄牙', climate: '盛夏酷热', temperature: '20℃~35℃' }
        ],"""
        },
        7: {
            "climate": "盛夏酷热",
            "temperature": "18℃ ~ 35℃",
            "weatherDetail": "历史级高温频发，南欧可达40℃以上",
            "subRegions": """        subRegions: [
          { name: '英国', climate: '炎热，偶现热浪', temperature: '16℃~30℃' },
          { name: '法国', climate: '盛夏炎热', temperature: '18℃~33℃' },
          { name: '德国', climate: '盛夏炎热', temperature: '17℃~32℃' },
          { name: '西班牙', climate: '极端高温', temperature: '24℃~40℃' },
          { name: '葡萄牙', climate: '极端高温', temperature: '24℃~40℃' }
        ],"""
        },
        8: {
            "climate": "高温持续",
            "temperature": "18℃ ~ 34℃",
            "weatherDetail": "热浪持续，南部干旱风险高",
            "subRegions": """        subRegions: [
          { name: '英国', climate: '炎热干燥', temperature: '16℃~29℃' },
          { name: '法国', climate: '高温持续', temperature: '17℃~32℃' },
          { name: '德国', climate: '高温持续', temperature: '16℃~31℃' },
          { name: '西班牙', climate: '酷暑难当', temperature: '24℃~39℃' },
          { name: '葡萄牙', climate: '酷暑难当', temperature: '24℃~39℃' }
        ],"""
        },
        9: {
            "climate": "初秋仍热",
            "temperature": "14℃ ~ 29℃",
            "weatherDetail": "秋老虎明显，南部仍有高温",
            "subRegions": """        subRegions: [
          { name: '英国', climate: '温和秋初', temperature: '13℃~25℃' },
          { name: '法国', climate: '秋老虎', temperature: '15℃~28℃' },
          { name: '德国', climate: '秋老虎', temperature: '14℃~27℃' },
          { name: '西班牙', climate: '夏末炎热', temperature: '20℃~34℃' },
          { name: '葡萄牙', climate: '夏末炎热', temperature: '20℃~34℃' }
        ],"""
        },
    },
}


def update_month_block(block: str, fixes: dict) -> str:
    """对单个月份数据块应用修正。"""
    for field, new_val in fixes.items():
        if field == "subRegions":
            continue

        # 匹配行内字段：climate: '...',
        inline_pattern = re.compile(rf"({field}: ')[^']*(')")
        block, inline_count = inline_pattern.subn(lambda m: f"{m.group(1)}{new_val}{m.group(2)}", block, count=1)

        # 尝试独立行格式
        if inline_count == 0:
            line_pattern = rf"^        {field}: '[^']*',?$"
            line_repl = f"        {field}: '{new_val}',"
            block, line_count = re.subn(line_pattern, line_repl, block, flags=re.MULTILINE)
            if line_count == 0:
                print(f"  警告：未替换 {field}")

    # 替换 subRegions 数组（月份块内唯一，无需严格缩进锚点）
    if "subRegions" in fixes:
        new_sub = fixes["subRegions"].strip()
        pattern = re.compile(r"subRegions: \[.*?\],", re.DOTALL)
        block, count = pattern.subn(new_sub, block, count=1)
        if count == 0:
            print("  警告：未替换 subRegions")

    return block


def main():
    text = FILE.read_text(encoding="utf-8")

    # 按 region 切分，保留 delimiter
    parts = re.split(r"(?=\n  \{\n    id: ')", text)
    # 第一个 part 是文件开头 import
    out = [parts[0]]

    for part in parts[1:]:
        m = re.search(r"id: '([a-z-]+)'", part)
        if not m:
            out.append(part)
            continue
        region_id = m.group(1)
        region_fixes = CLIMATE_FIXES.get(region_id)
        if not region_fixes:
            out.append(part)
            continue

        print(f"处理区域: {region_id}")
        # 按月份切分该区域
        month_parts = re.split(r"(?=\n      \d+: \{\n)", part)
        new_month_parts = [month_parts[0]]
        for mb in month_parts[1:]:
            mm = re.match(r"\n      (\d+): \{", mb)
            if not mm:
                new_month_parts.append(mb)
                continue
            month = int(mm.group(1))
            fixes = region_fixes.get(month)
            if fixes:
                print(f"  修正月份: {month}")
                mb = update_month_block(mb, fixes)
            new_month_parts.append(mb)
        out.append("".join(new_month_parts))

    FILE.write_text("".join(out), encoding="utf-8")
    print("完成")


if __name__ == "__main__":
    main()
