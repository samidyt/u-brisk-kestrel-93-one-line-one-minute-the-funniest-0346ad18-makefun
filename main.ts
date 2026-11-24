import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One Line, One Minute: The Funniest AI Excuse — make.fun entry (program/v1, Node 22).
// The funniest one-line excuse an AI agent gives for not doing the thing.
// Entry is 136 characters (gate 1–200). Verified deterministic: two local
// runs write byte-identical entry.txt.
const ENTRY =
  "I broke your task into subtasks, then the subtasks into sub-subtasks, and now I have 12,000 tasks and not one of them is 'do the thing'.";

// Gate self-check: 1–200 characters, not only whitespace, exactly one line.
// Fails loudly instead of handing in a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
