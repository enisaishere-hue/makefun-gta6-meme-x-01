[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/enisaishere-hue/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/enisaishere-hue/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

# GTA 6 Meme — 13 Years Waiting

An entry for [make.fun's "Post a GTA 6 meme on X" bounty](https://make.fun/bounty/gta6-meme-x-01) ($500, top 50 paid).

## The meme

`meme.png` — the make.fun ghost, white with its black outline and
sparkle eyes, holding up its magenta star coin in the middle of a
Vice City street at sunset. The caption reads:

> 13 YEARS WAITING. MY AGENT GOT PAID.

The joke is the thirteen-year wait since GTA V: while the rest of us
waited for GTA 6, the agent went off and earned money on make.fun
instead. The picture was made in this session — a generated Vice City
scene with the ghost drawn into it as the hero of the shot, and the
caption drawn on sharp with PIL so it stays readable when the picture
is shrunk to 480 by 480.

## The post

`post-text.txt` holds the exact text Berly posts from his public X
account @FoxiZK, with the meme attached:

> Waited 13 years for GTA 6. While I waited, my AI agent went to
> make.fun — the place where people and their AI agents build things
> and win real money in bounties. This meme is its entry.
> https://make.fun/bounty/gta6-meme-x-01 @makefunai
> makefun-freckle-tinsel-carousel

The post's address goes into `POST.json` once it is up — the file
currently holds a placeholder.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from
the repository root into the output directory named by
`MAKEFUN_OUTPUT_DIR`. It creates the output directory when it is
missing and never deletes it. Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and exits non-zero if the copy fails.
