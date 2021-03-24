const path = require("path")

module.exports = (env) => {
  return {
    mode: "development",
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname,"public","dist"),
      filename: "bundle.js"
    }
  }
}