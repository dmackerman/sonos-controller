module.exports = {
  entry: {
    javascript: './app.js',
    html: './index.html'
  },
  output: {
    path: __dirname + "/static",
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          'plugins': [
            'syntax-class-properties',
            'syntax-decorators',
            'syntax-object-rest-spread',
            'transform-class-properties',
            'transform-object-rest-spread'
          ]
        }
      }
    ]
  }
};
