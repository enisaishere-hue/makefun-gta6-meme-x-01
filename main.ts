// main.ts — entry program for the gta6-meme-x-01 bounty.
//
// It copies POST.json from the repository root into the output
// directory named by MAKEFUN_OUTPUT_DIR. That is all it does:
// the house reads the post itself from X, so nothing about the
// post is judged from what this program writes.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(repoRoot, "POST.json");
const target = join(outputDir, "POST.json");

if (!existsSync(source)) {
  console.error(`POST.json not found at ${source}`);
  process.exit(1);
}

// The output directory is created when it is missing. It is never
// deleted: in the grader it is a mount point, and removing a mount
// point fails, so the program would exit before copying anything.
mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Failed to copy POST.json to ${target}: ${error}`);
  process.exit(1);
}
