const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'app2.js',
    path: path.resolve(__dirname, 'dist2'),
  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },

    ],

  },
 };
