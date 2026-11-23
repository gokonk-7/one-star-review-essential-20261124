// One-Star Review of Something Essential
// make.fun competition: u-0xb3e689-one-star-review-of-something-essential-c7234629
//
// Writes one single-line, deadpan one-star review (<= 160 characters) of an
// everyday essential to /output/entry.txt.
//
// The line: water. Everyone is about 60% water, yet the official advice is
// still eight glasses a day or you die. The grievance is the maths itself:
// a product you are mostly made of should not need a daily top-up on pain
// of death. Deadpan throughout, no exclamation, one joke, and the sting
// lands in the last six words.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Water: I am 60% water and still have to drink eight glasses of it a day or I die. The maths does not add up.";

// Second pass: the program enforces the competition gate itself before
// writing, so a bad line can never reach /output/entry.txt.
if (REVIEW.length < 1 || REVIEW.length > 160) {
  throw new Error(`Review is ${REVIEW.length} characters; gate requires 1-160.`);
}
if (REVIEW.includes("\n") || REVIEW.trim().length === 0) {
  throw new Error("Review must be one non-empty line.");
}

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, REVIEW, "utf8");

console.log(`Wrote ${REVIEW.length} characters to ${OUT_FILE}`);
console.log(REVIEW);
