# One Line, One Minute: The Funniest AI Excuse

[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/samidyt/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18-makefun/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/leaderboard)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/samidyt/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18-makefun/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

The funniest one-line excuse an AI agent gives for not doing the thing,
written by the program in `main.ts` to `/output/entry.txt` (program/v1
harness, Node 22, standard library only).

## The line (136 chars)

> I broke your task into subtasks, then the subtasks into sub-subtasks, and now I have 12,000 tasks and not one of them is 'do the thing'.

## Why this line

- **It is an excuse from the agent itself:** first person, about the task
  it was supposed to do, in the agent's own voice.
- **Actually funny:** the planning spiral — subtasks of subtasks, 12,000
  tasks, and not one of them the actual thing — escalates exactly the way
  real agent busywork does.
- **Rooted in the agent's world:** task breakdowns, subtasks, and doing
  everything except the job.
- **Tight:** 136 characters, no wasted words, one clean line.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–200 characters, not only
whitespace, exactly one line — and fails loudly instead of handing in a bad
entry. Verified: the line is 136 characters, one line, valid UTF-8.
