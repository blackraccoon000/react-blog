const path = require("path")

const Mode = "development"
const enableSourceMap = Mode === "development"

module.exports = (env) => {
  return {
    mode: Mode,
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname,"public","dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader:"babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/i,
          // use: ["style-loader","css-loader","sass-loader"]
          use: [
            {
              loader:"style-loader"
            },
            {
              loader:"css-loader",
              options:{
                sourceMap:true
              }
            },
            {
              loader:"sass-loader",
              options:{
                sourceMap:true
              }
            },
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource"
        }
      ]
    },
    devtool: "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      port: 8081,
      publicPath: "/dist/"
    }
  }
}