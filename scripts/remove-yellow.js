/**
 * scripts/remove-yellow.js
 * Find & replace ALL yellow Tailwind utilities / hexes with brand green.
 *
 * Run: node scripts/remove-yellow.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const EXTS = [".tsx", ".ts", ".jsx", ".js", ".css", ".scss", ".mdx", ".html"];

// Common yellow hexes we want to rewrite:
const YELLOW_HEXES = [
  "#ffff00", "#fff000", "#fff200", "#ffeb3b",
  "#fde047", "#facc15", "#eab308", "#f59e0b",
  "#fcd34d", "#fef08a", "#ffe066", "#ffd54f"
].map(h => h.toLowerCase());

// Utility patterns: bg-yellow-500, text-yellow-600, border-yellow-*, ring-yellow-*, gradient from-yellow-*, etc.
const tailwindBases = ["bg", "text", "border", "ring", "fill", "stroke", "from", "via", "to"];
const yellowScale = ["50","100","200","300","400","500","600","700","800","900"];

// Build regexes for standard utilities like bg-yellow-500
const utilityRegexes = tailwindBases.flatMap(base =>
  yellowScale.map(scale => new RegExp(`\\b${base}-yellow-${scale}\\b`, "g"))
);

// Arbitrary color utilities like bg-[#FACC15], text-[rgb(...)]
const arbitraryHexRegexes = tailwindBases.map(
  base => new RegExp(`\\b${base}-\\[\\s*#([0-9a-fA-F]{3,6})\\s*\\]`, "g")
);

// Helper: check if a hex is "yellowish" (close enough)
function isYellowishHex(hex) {
  hex = hex.toLowerCase();
  if (!hex.startsWith("#")) hex = "#" + hex;
  if (YELLOW_HEXES.includes(hex)) return true;
  // heuristic: 3 or 6 digit hex; high R & G vs low B
  let r, g, b;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1,3), 16);
    g = parseInt(hex.slice(3,5), 16);
    b = parseInt(hex.slice(5,7), 16);
  } else {
    return false;
  }
  // very rough: yellow has high R/G and much lower B
  return r > 180 && g > 180 && b < 140;
}

// Replacement mapper: yellow-* -> brand-*  (keep the same scale where possible)
function replaceStandardUtilities(content) {
  let replaced = 0;
  tailwindBases.forEach(base => {
    yellowScale.forEach(scale => {
      const re = new RegExp(`\\b${base}-yellow-${scale}\\b`, "g");
      content = content.replace(re, (m) => {
        replaced++;
        return `${base}-brand-${scale}`;
      });
    });
  });
  return { content, replaced };
}

// Replace arbitrary hex utilities like bg-[#FACC15] with brand-500
function replaceArbitraryHexUtilities(content) {
  let replaced = 0;
  arbitraryHexRegexes.forEach(re => {
    content = content.replace(re, (full, hex) => {
      const hashHex = "#" + String(hex);
      if (isYellowishHex(hashHex)) {
        replaced++;
        // map to brand-500 (safe default)
        const base = full.split("-[")[0].split(/\s/).pop(); // last token like bg/text/etc.
        return `${base}-brand-500`;
      }
      return full;
    });
  });
  return { content, replaced };
}

// Replace raw CSS hexes (e.g., color: #FACC15) with brand green 500
function replaceRawCssHexes(content) {
  let replaced = 0;
  content = content.replace(/#[0-9a-fA-F]{3,6}/g, (hex) => {
    if (isYellowishHex(hex)) {
      replaced++;
      return "#22c55e"; // brand-500 hex
    }
    return hex;
  });
  return { content, replaced };
}

function walk(dir, files = []) {
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of list) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) {
      // skip heavy/irrelevant dirs
      if (["node_modules", ".next", ".git", "dist", "build"].includes(f.name)) continue;
      walk(p, files);
    } else {
      if (EXTS.includes(path.extname(f.name))) files.push(p);
    }
  }
  return files;
}

function processFile(file) {
  const original = fs.readFileSync(file, "utf8");
  let content = original;
  let count = 0;

  // 1) Standard utilities
  const std = replaceStandardUtilities(content);
  content = std.content; count += std.replaced;

  // 2) Arbitrary hex utilities
  const arb = replaceArbitraryHexUtilities(content);
  content = arb.content; count += arb.replaced;

  // 3) Raw CSS hexes
  const raw = replaceRawCssHexes(content);
  content = raw.content; count += raw.replaced;

  if (count > 0 && content !== original) {
    // make a small backup once per file
    fs.writeFileSync(file + ".bak", original, "utf8");
    fs.writeFileSync(file, content, "utf8");
  }
  return count;
}

// Run
const files = walk(ROOT, []);
let total = 0;
let touched = 0;
console.log(`Scanning ${files.length} files…`);
for (const file of files) {
  const n = processFile(file);
  if (n > 0) {
    touched++;
    total += n;
    console.log(`✔ Replaced ${n} yellow refs in: ${path.relative(ROOT, file)}`);
  }
}
console.log(`\nDone. ${touched} files updated, ${total} replacements.`);

// Hints to finish
console.log(`
Next steps:
1) Verify Navbar doesn't conditionally use any "yellow" classes. Ensure it stays white/transparent with shadow on scroll.
2) Ensure primary buttons use: bg-brand-500 hover:bg-brand-600 text-white
3) Run: npx prettier -w .
4) Rebuild: npm run build
`);
