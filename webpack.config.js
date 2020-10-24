const HtmlWebpackPlugin = require('html-webpack-plugin'); //HTML에 tag를 자동으로 생성해주는 플러그인
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //
const path = require('path'); //lod가 제공하는 기본 모듈

module.exports = {
  entry: './src/index.js',
  output: {
    //path: path.resolve(__dirname, 'dist'), // __dirname는 webpack.config 자기 자신의 위치
    //filename: 'my-first-webpack.bundle.js'
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 4 Creates `make.css` from JS strings
          MiniCssExtractPlugin.loader,
          // 3 Translates CSS into CommonJS
          'css-loader',
          // 2 브라우저 호한성 코드 넣기
          'postcss-loader',
          // 1 Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin()
  ]
};