const path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.require(__dirname, "dist/js"),
    filename: "bundle.js"
  }
};
