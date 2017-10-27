const webpack = require('webpack')

module.exports = () => ({
  plugins: [
    new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('development'),
          'LANG_CODE': JSON.stringify(process.env.LANG_CODE)
        }
      })
  ]
})
