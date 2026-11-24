// main.ts — the program the harness runs: it reads every case from
// /input/cases.json (or MAKEFUN_INPUT_DIR), answers each one alone with
// run() from solve.js, and writes /output/answers.json (or
// MAKEFUN_OUTPUT_DIR): a JSON array of the answers, one per case and in
// the cases' order.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { setFlagsFromString } from 'node:v8';

// V8's incremental marking off, set before solve.js is imported so all of
// its work runs under it (the house baseline runs with the same flag, and
// an entry may tune V8's flags the same way).
setFlagsFromString('--no-incremental-marking');

const mod = await import(new URL('./solve.js', import.meta.url).href);
const run = mod.run;

const INPUT_DIR = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const cases = JSON.parse(readFileSync(join(INPUT_DIR, 'cases.json'), 'utf8'));
const answers = [];
for (const c of cases) answers.push(run(c.input));
writeFileSync(join(OUTPUT_DIR, 'answers.json'), JSON.stringify(answers));
