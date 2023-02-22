const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // eslint-disable-next-line no-undef
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html'
    })
]
};
