#! /usr/bin/env node
const fs = require("fs");

function createHTMLContent(cssFilename, jsFilename) {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./${cssFilename}.css">
      <title>Document</title>
    </head>
    <body>
      <script src="./${jsFilename}.js"></script>
    </body>
    </html>
  `;
}

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("HTML file name (index): ", function (html) {
  rl.question("CSS file name (style): ", function (css) {
    rl.question("JS file name (script):  ", function (js) {
      const htmlFile = html || "index";
      const cssFile = css || "style";
      const jsFile = js || "script";

      fs.writeFileSync(htmlFile + ".html", createHTMLContent(cssFile, jsFile));
      fs.writeFileSync(cssFile + ".css", "");
      fs.writeFileSync(jsFile + ".js", "");
      console.log("\nFiles created!");
      rl.close();
    });
  });
});
