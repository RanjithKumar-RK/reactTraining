const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8000
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['@babel/react', '@babel/preset-env']
            }
         },
         {
            test: /\.css$/i,
            use: ['css-loader'],
         },
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}