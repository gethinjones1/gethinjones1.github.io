# gethin's site

A tiny Hugo site. Posts are Markdown files in `content/notes/`.

## Run it locally

```sh
hugo server -D        # -D also shows drafts
```

Open http://localhost:1313. It reloads as you save.

## Write a note

```sh
hugo new notes/insert_awesome_name.md
nvim content/notes/insert_awesome_name.md
```

The new file starts as `draft: true`. When it's ready, set `draft: false`, then commit and push. The homepage lists the newest five notes; the rest are at `/notes/`.

Front matter:

```yaml
title: "Insert Awesome Name"
date: 2026-10-04
description: "One line for search engines and RSS."   # optional
draft: false
```

Images: put them next to the post by making a folder instead of a file —
`content/notes/my-post/index.md` plus `content/notes/my-post/photo.jpg` — and use `![alt text](photo.jpg)`.

## Edit the rest

| What | Where |
| --- | --- |
| The "now" block | `data/now.toml` |
| Intro line, links, homepage note count | `hugo.toml` → `[params]` |
| Colours (light and dark) | `assets/css/site.css`, top of file |
| Layout | `layouts/` |

## Deploy (Cloudflare Pages)

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
3. Build command `hugo --minify`, output directory `public`.
4. Add an environment variable `HUGO_VERSION` = `0.150.0`.
5. Set `baseURL` in `hugo.toml` to your domain.

Every push to `main` redeploys.
