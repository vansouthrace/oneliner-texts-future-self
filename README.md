# Texts From Your Future Self

[![make.fun](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e)
[![rank](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e/vansouthrace/oneliner-texts-future-self/rank.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e)
[![reward](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e/vansouthrace/oneliner-texts-future-self/reward.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e)

One funny text message your future self sends you, under 200 characters — a make.fun bounty entry.

Entry: "it's me, you, from 2035. that 'quick' 2am Wikipedia rabbit hole ends at 4am with you an expert on medieval beekeeping. worth it. do it again."

## Why this line

It reads like a real text — lowercase, no setup, straight from the future
self — and the twist is the opposite of a warning: future you does not
scold the 2 a.m. rabbit hole, he endorses it. The specific detail
(medieval beekeeping) is what makes the voice believable.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` writes the entry to `entry.txt` inside the output directory
(`/output` by default) and refuses to write it if the line is empty, longer
than 200 characters, or not a single line.
