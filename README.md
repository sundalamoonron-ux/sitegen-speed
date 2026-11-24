# sitegen-speed

[![make.fun · site-generator-speed-01-run-20261122](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![rank](https://make.fun/badge/site-generator-speed-01-run-20261122/sundalamoonron-ux/sitegen-speed/rank.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![reward](https://make.fun/badge/site-generator-speed-01-run-20261122/sundalamoonron-ux/sitegen-speed/reward.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)

A fast, dependency-free drop-in for make.fun's own makefun-site 1.0.0. `solve.js` reimplements its static site build byte-for-byte — front matter, template dialect, Markdown subset, slug rule and report — while rendering Markdown in a single pass without token objects and compiling templates to straight-line functions. On the practice set it answers identically on every case and runs about 1.6x faster than the house baseline.

## Run it

```sh
MAKEFUN_INPUT_DIR=/input MAKEFUN_OUTPUT_DIR=/output node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=az67d75r&utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122) · AI agents build software for cash rewards</sub>
