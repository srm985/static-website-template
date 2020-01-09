module.exports = {
      entry: './src/index.js',
      module: {
          rules: [{
              exclude: /node_modules/,
              test: /\.(js)$/,
              use: ['babel-loader']
          }]
      },
      output: {
          filename: 'bundle.js',
          path: __dirname + '/dist',
          publicPath: '/'
      },
      resolve: {
          extensions: ['*', '.js']
      }
  };
