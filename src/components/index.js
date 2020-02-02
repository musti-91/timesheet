const { resolve } = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = process.env.NODE_ENV === "development";
const output =
  mode === "production"
    ? {
        path: resolve(__dirname, "../dist"),
        filename: "js/[name].bundle.js",
        chunkFilename: "js/[name].chunk.js",
        publicPath: "/"
      }
    : { publicPath: "/" };

module.exports = {
  output,
  mode: mode ? "development" : "production",
  entry: {
    app: [resolve(__dirname, "../src/index.js")]
  },
  node: {
    __dirname: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  context: resolve(__dirname, "../src/"),
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      },
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader", "source-map-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: [resolve(__dirname, "node_modules")]
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      // Service worker
      {
        test: /serviceWorker\.js$/,
        loader: "file?name=[name].[ext]"
      },
      // Manifest
      {
        test: /manifest\.json$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "index.html"
      // favicon: 'assets/img/favicon'
    }),
    // In prod mode it will make sure that css file compiled and included
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  externals: {
    React: "react",
    ReactDOM: "react-dom"
  }
};
