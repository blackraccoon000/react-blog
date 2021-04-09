const path = require("path")
const webpack = require("webpack")
require("dotenv").config({ path: ".env.firebase" })
require("dotenv").config({ path: ".env.local" })
require("dotenv").config({ path: ".env.micro" })

module.exports = {
  entry: './src/app.js',
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
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
      "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      "process.env.FIREBASE_DATABASE_URL": JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      "process.env.FIREBASE_PROJECT_ID": JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
      "process.env.FIREBASE_APP_ID": JSON.stringify(process.env.FIREBASE_APP_ID),
      "process.env.FIREBASE_MEASUREMENT_ID": JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
      "process.env.FIREBASE_LOGIN_UID": JSON.stringify(process.env.FIREBASE_LOGIN_UID),
      "process.env.MICRO_CMS_API_URL": JSON.stringify(process.env.MICRO_CMS_API_URL),
      "process.env.MICRO_CMS_API_KEY": JSON.stringify(process.env.MICRO_CMS_API_KEY),
    })
  ]
}