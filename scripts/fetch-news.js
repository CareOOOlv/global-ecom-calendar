#!/usr/bin/env node
/**
 * 跨境电商新闻抓取脚本
 * 抓取源：亿邦动力（ebrun.com）跨境电商栏目
 * 输出：public/news.json
 */

import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUTPUT_PATH = resolve(__dirname, '../public/news.json');
const MAX_ARTICLES = 12;

// 亿邦动力 - 跨境电商栏目
const EB_RUN_URL = 'https://www.ebrun.com/label/6';

async function fetchHTML(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'Connection': 'keep-alive',
    },
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

function parseEBRun(html) {
  const articles = [];

  // 策略1：匹配 <h3><a href="..." title="..."> 结构
  const h3Regex = /<h3[^>]*>\s*<a\s+href="(https?:\/\/www\.ebrun\.com\/\d{8}\/[^"]+\.shtml)"\s+title="([^"]+)"[^>]*>[\s\S]*?<\/a>\s*<\/h3>/gi;
  let match;
  while ((match = h3Regex.exec(html)) !== null && articles.length < MAX_ARTICLES) {
    const url = match[1];
    const title = match[2];
    if (title && url && !articles.some(a => a.url === url)) {
      articles.push({ title: cleanTitle(title), url, source: '亿邦动力' });
    }
  }

  // 策略2：匹配所有 ebrun 文章链接（兜底）
  if (articles.length === 0) {
    const linkRegex = /<a\s+href="(https?:\/\/www\.ebrun\.com\/[^"]+\.shtml)"[^>]*>([\s\S]*?)<\/a>/gi;
    let linkMatch;
    while ((linkMatch = linkRegex.exec(html)) !== null && articles.length < MAX_ARTICLES) {
      const url = linkMatch[1];
      const rawTitle = linkMatch[2].replace(/<[^>]+>/g, '').trim();
      if (rawTitle.length > 8 && !articles.some(a => a.url === url) && !url.includes('label')) {
        articles.push({ title: cleanTitle(rawTitle), url, source: '亿邦动力' });
      }
    }
  }

  return articles;
}

function cleanTitle(title) {
  return title
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function getFallbackNews() {
  // 当抓取失败时使用内置的 fallback 数据
  return {
    updatedAt: new Date().toISOString(),
    articles: [
      { id: 1, title: '（抓取中...）亿邦动力跨境电商最新动态', url: 'https://www.ebrun.com/label/6', source: '亿邦动力', publishedAt: null },
    ]
  };
}

async function main() {
  console.log('[news-scraper] 开始抓取亿邦动力...');
  try {
    const html = await fetchHTML(EB_RUN_URL);
    console.log(`[news-scraper] HTML抓取完成，长度: ${html.length}`);
    let articles = parseEBRun(html);
    console.log(`[news-scraper] 解析到 ${articles.length} 篇文章`);

    if (articles.length === 0) {
      console.warn('[news-scraper] 未解析到文章，保存调试HTML');
      writeFileSync(
        resolve(__dirname, '../public/news-debug.html'),
        html,
        'utf-8'
      );
      // 使用 fallback
      const fallback = getFallbackNews();
      writeFileSync(OUTPUT_PATH, JSON.stringify(fallback, null, 2), 'utf-8');
      console.log('[news-scraper] 已写入 fallback 数据');
      return;
    }

    const result = {
      updatedAt: new Date().toISOString(),
      articles: articles.slice(0, MAX_ARTICLES).map((a, i) => ({
        id: i + 1,
        title: a.title,
        url: a.url,
        source: a.source,
        publishedAt: null
      }))
    };

    mkdirSync(resolve(__dirname, '../public'), { recursive: true });
    writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2), 'utf-8');
    console.log(`[news-scraper] ✅ 已写入 ${articles.length} 篇文章到 ${OUTPUT_PATH}`);
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('[news-scraper] 错误:', err.message);
    // 写入 fallback 数据
    const fallback = getFallbackNews();
    try {
      mkdirSync(resolve(__dirname, '../public'), { recursive: true });
      writeFileSync(OUTPUT_PATH, JSON.stringify(fallback, null, 2), 'utf-8');
      console.log('[news-scraper] 已写入 fallback 数据');
    } catch (e2) {
      console.error('[news-scraper] 无法写入 fallback:', e2.message);
    }
    process.exit(0); // fallback 数据已写入，不算失败
  }
}

main();
