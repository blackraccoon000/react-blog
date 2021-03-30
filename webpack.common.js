const path = require("path")

module.exports = {
  entry: './src/playground/mini-react-redux.js',
  // entry: './src/playground/redux-101.js',
  // entry: './src/app.js',
  output: {
    path: path.join(__dirname,"public","dist"),
    filename: "bundle.js",
    clean:true
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
  }
}