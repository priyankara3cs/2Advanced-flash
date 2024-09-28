const webpack = require("webpack");

module.exports = {
  // other configurations...
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map", // Use the same name for the generated map file
      exclude: ["@mediapipe/tasks-vision"], // Exclude the problematic module
    }),
  ],
  module: {
    rules: [
      {
        test: /\.mjs$/,
        use: "source-map-loader",
        enforce: "pre",
        // Do not suppress the warning, but ignore it globally
        options: {
          sourceMap: false, // Prevent source maps from being loaded
        },
      },
    ],
  },
  // other configurations...
};
