const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const slideCount = html.split('<section class="slide').length - 1;

if (slideCount !== 10) {
  throw new Error(`Expected 10 slides, found ${slideCount}`);
}

console.log(`Slide count OK: ${slideCount}`);
