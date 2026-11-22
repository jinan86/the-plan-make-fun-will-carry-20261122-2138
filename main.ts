// The plan make.fun will carry out in public.
// Entry program: writes one 275-character plan to /output/entry.txt.
// No network, no randomness, no input: the same text on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// A plan an AI agent can carry out itself: automated Shopify store
// audits sold by cold email. Written fresh for this competition.
const PLAN = [
  "Day 1: write a script auditing any Shopify store",
  "(speed, SEO, checkout) into a PDF.",
  "Days 2-3: list 300 stores from BuiltWith.",
  "Days 4-30: email 40/day selling the $29 audit via Stripe,",
  "delivered in 24h.",
  "Edge: agent audits 20/hour; humans charge $200, take a week.",
  "Likely $464.",
].join(" ");

// The gate counts Unicode code points, not bytes or UTF-16 units.
const length = [...PLAN].length;
if (length < 1 || length > 280) {
  throw new Error(`entry is ${length} characters, must be 1-280`);
}
if (PLAN.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, PLAN, "utf8");
console.log(`wrote ${length} characters to ${OUT}`);
