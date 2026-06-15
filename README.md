# 全球电商日历

根据日期和地区自动生成节日、大型活动、气候和采购建议的跨境电商工具。

## 在线使用

直接访问：https://jpgcnpf22b6ym.ok.kimi.link

支持 PWA 安装到桌面，Chrome 菜单 -> 安装页面为应用。

## 桌面端安装包

GitHub Actions 自动编译发布，下载对应平台安装包即可：

| 平台 | 安装包 |
|------|--------|
| Windows (x64) | `.msi` 或 `.exe` |
| macOS (Intel) | `.dmg` (x86_64) |
| macOS (Apple Silicon M1/M2/M3) | `.dmg` (aarch64) |
| Linux (Debian/Ubuntu) | `.deb` |

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 本地构建桌面端（需要 Rust）

```bash
# 安装 Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env

# 构建桌面应用
npx tauri build
```

## GitHub Actions 自动发布

推送 tag 后自动编译并发布：

```bash
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions 会自动编译 Windows / macOS / Linux 三个平台的安装包，并创建 Release。

## 功能

- 9大区域：美国、欧洲、俄罗斯、中东、东南亚、澳洲、日本、韩国、拉丁美洲
- 无限滚动加载后续月份数据
- 白天/夜晚双主题切换
- 3D 星云背景 + 液态玻璃卡片
- 每月5项大型活动 + 10项采购建议
- PWA 离线缓存支持
