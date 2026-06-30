/**
 * 倒计时工具
 * 解析中文日期字符串，返回倒计时信息
 */

export interface CountdownResult {
  /** 剩余天数（精确日期），null 表示模糊日期 */
  daysLeft: number | null;
  /** 显示文本，如 '5天后' / '下个月' */
  label: string;
  /** 是否已过期 */
  isPast: boolean;
  /** 是否是精确日期（可算出具体天数的） */
  isExact: boolean;
  /** 紧急程度：0=已过/当天, 1=7天内(紧急), 2=30天内, 3=30天以上 */
  urgency: 0 | 1 | 2 | 3;
}

/**
 * 解析日期字符串，计算倒计时
 * @param dateStr - 如 '7月4日' / '7月中旬' / '1月全月'
 * @param targetYear - 目标年份
 * @param targetMonth - 目标月份 (1-12)
 */
export function getCountdown(dateStr: string, targetYear: number, targetMonth: number): CountdownResult {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const today = new Date(currentYear, now.getMonth(), now.getDate());

  // ---- 模式1: 精确日期 X月X日 ----
  const exactMatch = dateStr.match(/^(\d+)月(\d+)日$/);
  if (exactMatch) {
    const m = parseInt(exactMatch[1], 10);
    const d = parseInt(exactMatch[2], 10);
    const eventDate = new Date(targetYear, m - 1, d);
    return calcDaysDiff(eventDate, today);
  }

  // ---- 模式2: 日期范围 X月X-X日 ----
  const rangeMatch = dateStr.match(/^(\d+)月(\d+)-(\d+)日$/);
  if (rangeMatch) {
    const m = parseInt(rangeMatch[1], 10);
    const startDay = parseInt(rangeMatch[2], 10);
    const eventDate = new Date(targetYear, m - 1, startDay);
    return calcDaysDiff(eventDate, today);
  }

  // ---- 模式3: 仅月份 X月 ----
  const monthOnlyMatch = dateStr.match(/^(\d+)月$/);
  if (monthOnlyMatch) {
    const m = parseInt(monthOnlyMatch[1], 10);
    const eventDate = new Date(targetYear, m - 1, 1);
    return calcRelativeMonth(m, currentYear, currentMonth, today, eventDate);
  }

  // ---- 模式4: 跨月 3月/4月 ----
  if (/^\d+月\/\d+月$/.test(dateStr)) {
    const startM = parseInt(dateStr, 10);
    const eventDate = new Date(targetYear, startM - 1, 15); // 取中间值
    return calcRelativeMonth(startM, currentYear, currentMonth, today, eventDate);
  }

  // ---- 模式5: 全月/整月 X月全月/X月整月/整个X月 ----
  const fullMonthMatch = dateStr.match(/^(整个)?(\d+)月(全月|整月)?$/);
  if (fullMonthMatch) {
    const m = parseInt(fullMonthMatch[2], 10);
    const eventDate = new Date(targetYear, m - 1, 15);
    return calcRelativeMonth(m, currentYear, currentMonth, today, eventDate);
  }

  // ---- 模式6: 旬 X月上旬/中旬/下旬 ----
  const xunMatch = dateStr.match(/^(\d+)月(上|中|下旬)$/);
  if (xunMatch) {
    const m = parseInt(xunMatch[1], 10);
    const xun = xunMatch[2];
    let day = 1;
    if (xun === '中') day = 15;
    else if (xun === '下') day = 21;
    const eventDate = new Date(targetYear, m - 1, day);
    return calcRelativeMonth(m, currentYear, currentMonth, today, eventDate);
  }

  // ---- 模式7: 第X周 X月第X周 ----
  const weekMatch = dateStr.match(/^(\d+)月第(\d+)周$/);
  if (weekMatch) {
    const m = parseInt(weekMatch[1], 10);
    const w = parseInt(weekMatch[2], 10);
    const day = (w - 1) * 7 + 1; // 粗略估算
    const eventDate = new Date(targetYear, m - 1, Math.min(day, 28));
    return calcRelativeMonth(m, currentYear, currentMonth, today, eventDate);
  }

  // ---- 模式8: 第X个星期X / 最后星期X ----
  const weekdayMatch = dateStr.match(/^(\d+)月(第(\d+)个|最后)(周一|周二|周三|周四|周五|周六|周日)$/);
  if (weekdayMatch) {
    const m = parseInt(weekdayMatch[1], 10);
    let day = 15; // 默认月中
    const pos = weekdayMatch[3];
    if (pos) { const n = parseInt(pos, 10); day = Math.min((n - 1) * 7 + 4, 28); }
    const eventDate = new Date(targetYear, m - 1, day);
    return calcRelativeMonth(m, currentYear, currentMonth, today, eventDate);
  }

  // ---- 模式9: X月末 ----
  const endOfMonthMatch = dateStr.match(/^(\d+)月末$/);
  if (endOfMonthMatch) {
    const m = parseInt(endOfMonthMatch[1], 10);
    const eventDate = new Date(targetYear, m, 0); // 当月最后一天
    return calcRelativeMonth(m, currentYear, currentMonth, today, eventDate);
  }

  // ---- 兜底：无法识别的格式 ----
  const monthDiff = (targetYear - currentYear) * 12 + (targetMonth - currentMonth);
  return {
    daysLeft: null,
    label: formatRelativeLabel(monthDiff),
    isPast: monthDiff < 0 || (monthDiff === 0 && false), // 不确定
    isExact: false,
    urgency: monthDiff <= 0 ? 0 : monthDiff <= 1 ? 1 : 2,
  };
}

function calcDaysDiff(eventDate: Date, today: Date): CountdownResult {
  // 重置时分秒
  const event = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
  const diffMs = event.getTime() - today.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  const isPast = diffDays < 0;
  let label: string;
  let urgency: 0 | 1 | 2 | 3;

  if (diffDays < 0) {
    label = `已过${Math.abs(diffDays)}天`;
    urgency = 0;
  } else if (diffDays === 0) {
    label = '今天';
    urgency = 1;
  } else if (diffDays === 1) {
    label = '明天';
    urgency = 1;
  } else if (diffDays <= 7) {
    label = `${diffDays}天后`;
    urgency = 1;
  } else if (diffDays <= 30) {
    label = `${diffDays}天后`;
    urgency = 2;
  } else if (diffDays <= 60) {
    label = `${Math.ceil(diffDays / 30)}个月后`;
    urgency = 3;
  } else {
    label = `${diffDays}天后`;
    urgency = 3;
  }

  return { daysLeft: diffDays, label, isPast, isExact: true, urgency };
}

function calcRelativeMonth(
  m: number,
  curYear: number,
  curMonth: number,
  today: Date,
  eventDate: Date
): CountdownResult {
  const monthDiff = (eventDate.getFullYear() - curYear) * 12 + (m - curMonth);
  const diffMs = eventDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  const isPast = diffDays < 0;
  let urgency: 0 | 1 | 2 | 3;
  if (!isPast && diffDays <= 30) urgency = 1;
  else if (!isPast && diffDays <= 60) urgency = 2;
  else urgency = isPast ? 0 : 3;

  return {
    daysLeft: null,
    label: formatRelativeLabel(monthDiff),
    isPast,
    isExact: false,
    urgency,
  };
}

function formatRelativeLabel(monthDiff: number): string {
  if (monthDiff < 0) return `${Math.abs(monthDiff)}个月前`;
  if (monthDiff === 0) return '当月';
  if (monthDiff === 1) return '下个月';
  return `${monthDiff}个月后`;
}
