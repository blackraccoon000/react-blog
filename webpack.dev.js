const path = require("path")

console.log(path.join(__dirname, 'public'))

module.exports =  {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: 8081,
    publicPath: "/dist/",
  }
}