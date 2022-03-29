const getTweets = require("./lib/tweets");
const generate = require("./lib/generate");
const copyFiles = require("./lib/copy-static");
const action = process.argv[2] ?? "noop";

async function run() {
  switch (action) {
    case "build":
      await getTweets();
      await generate();
      await copyFiles();
      break;
    default:
      console.log("noop");
      break;
  }
}

run().catch(console.error);
