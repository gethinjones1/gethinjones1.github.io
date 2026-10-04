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

## Deploy (GitHub Pages)

Pushes to `main` build and publish automatically via `.github/workflows/deploy.yml`.

One-time setup, in the repo on GitHub:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
   Without this the workflow will fail at the deploy step.
2. Push to `main`. Watch it under the **Actions** tab.

The site lands at <https://gethinjones1.github.io/>.

The workflow takes `baseURL` from the Pages config rather than `hugo.toml`, so
renaming the repo or adding a custom domain needs no change here.

This repo is named `gethinjones1.github.io`, which is what makes Pages serve it
at the root. Renaming it to anything else turns it into a "project site" served
from `/<repo-name>/` instead.

If that ever happens, do **not** add the path to `baseURL` here — the workflow
already injects the right URL. A path in `hugo.toml` only breaks local dev, by
making `hugo server` serve from `localhost:1313/<path>/` and leaving the plain
root a 404 with an unstyled page.

### A custom domain later

Settings → Pages → Custom domain, then add `static/CNAME` containing the bare
domain so it survives each deploy.
