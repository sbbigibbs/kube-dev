const webpack = require('webpack')

module.exports = ({ platform }) => ({
  entry: `./index.${platform}.js`,
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        include: [
          /node_modules\/native-navigation/,
          /node_modules\/react-native/,
          /node_modules\/react-clone-referenced-element/,
          /node_modules\/react-native-code-push/,
          /\./,
        ],
        use: [
          {
              loader: 'babel-loader' ,
              options: { 
                  presets: [
                      "react-native",
                  ]
              }
          }
        ]
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { mimetype: "image/png" }
      }
    ],
  }
})
