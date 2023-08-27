# shrtn.hu

## Introduction

`shrtn.hu` is another open-source url "shortener" for anyone.

It is built with NextJS, running on serverless Cloudflare services.

There is nothing special about it, the only purpose of this project is to *(try)* to have a long-running pet project that anyone can acutally use.

Planned features are:
- Write more strict eslint rules
- Create a reproducible (containerzied) development environment before adding any more tools
- Write some end-to-end tests
- QR code generation
- Adjustable TTL for urls (max 6 months)
- Burner urls (after X click it'll delete itself)
- Delete urls with passwords, to delete urls early

## Getting Started

For now the development is kinda janky:

You can run:
```bash
npm run dev
```
like on any standard NextJS project, but KV will not work properly so the middleware and the url creation will fail!

To get those to work you must run:
```bash
npm run build:prod
```
wait for the build to finish, then run:
```bash
npm run preview
```

Both method runs the server at [http://localhost:3000](http://localhost:3000).

> Yes I tried running both command with `||` or with a process runner like [this](https://github.com/open-cli-tools/concurrently) wihtout luck.
>
> See, when `next-on-pages` cleans up the build folder before every build
> then `miniflare` (the local emulator behind `wrangler`) will instantly fail.
>
> So currently this is how it is since I have no plans to migrate away from CF.

## Production

As it is mentioned above, this project runs on Cloudflare!

So basically the static assets running served from CF Pages, the server rendered functions and middlewares runs on CF Workers, for database this project is using CF KV and for captcha it will use CF Turnstile.

There is a preview build for every branch + a dedicated `preview` branch which has a custom domain for that [`preview.shrtn.hu`](https://preview.shrtn.hu) for UAC purposes.

## Contribution

If something is missing or buggy or you can write it cleaner, PRs are always welcome.

But please **always** create an issue before a PR describing what needs to be changed, so we can have a conversation about it and track the progress.

Please always run `npm run lint` before submitting a PR.
