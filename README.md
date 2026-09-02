# primarystar 的个人博客

极简风格的个人博客，托管于 Cloudflare Pages。

## 技术栈

- 纯 HTML + CSS + JavaScript（无框架、无构建步骤）
- 部署：Cloudflare Pages（免费，`*.pages.dev` 域名）

## 线上地址

https://my-blog-3xm.pages.dev/

## 本地预览

直接用浏览器打开 `index.html` 即可，或启动一个静态服务器：

```bash
python -m http.server 8080
```

## 目录结构

```
blog/
├── index.html          # 首页：标题 + 关于我 + 文章列表
├── 404.html            # 404 页
├── assets/
│   ├── css/style.css   # 极简全局样式
│   └── js/main.js      # 页脚年份等
└── posts/              # 文章（每篇一个 HTML）
    ├── first-post.html
    ├── investment-notes.html
    └── study-method.html
```

## 如何写新文章

1. 复制 `posts/` 下任意一篇作为模板，改名并修改内容；
2. 在 `index.html` 的"文章"列表里加入对应链接（按时间倒序）；
3. 推送代码到 GitHub，Cloudflare Pages 自动部署。

## 部署

1. 将本仓库推送到 GitHub；
2. 在 Cloudflare Pages 控制台选择 **Workers & Pages → Pages → 连接到 Git**；
3. 选择本仓库，构建命令留空，构建输出目录填 `.`；
4. 部署完成后获得 `https://<项目名>.pages.dev` 免费域名。
