const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  module: {
    alias: {
      'vue-types': 'vue-types/dist/vue-types.modern.js'
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "vue-style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  devServer: {
    port: 8000,
    contentBase: path.resolve(__dirname, "src"),
  },
};
