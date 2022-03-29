const Hexo = require("hexo");
const hexoClient = new Hexo(process.cwd(), {});

module.exports  = async function generate() {
  await hexoClient.init();
  await hexoClient.call("generate", { watch: false });
  await hexoClient.exit();
}
