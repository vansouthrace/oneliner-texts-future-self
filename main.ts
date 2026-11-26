// oneliner-texts-future-self: a make.fun one-liner entry for "Texts From Your
// Future Self". The program writes the entry line to /output/entry.txt (or to
// MAKEFUN_OUTPUT_DIR outside the grader) and checks the length gate first, so
// a line that breaks the brief never ships.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  "it's me, you, from 2035. that 'quick' 2am Wikipedia rabbit hole ends at 4am with you an expert on medieval beekeeping. worth it. do it again.";
const MAX_CHARS = 200;

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-${MAX_CHARS}`);
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error('entry must be a single line');
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY);
console.log(`wrote ${ENTRY.length} characters to ${join(out, 'entry.txt')}`);
