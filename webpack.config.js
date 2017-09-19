// var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = {
//   entry: {
//     app: ['babel-polyfill', './src/js/main.js', './src/sass/style.scss']
//   },
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'js/[name].bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['env']
//           }
//         },
//         exclude: /node_modules/
//       },
//       {
//         test: /\.scss$/,
//         loaders: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: ['css-loader', 'sass-loader?outputStyle=expanded']
//         }),
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: ['file-loader'],
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[name].[ext]',
//               // css내의 path: publicPath + outputPath => ../assets/fonts/
//               publicPath: '../',
//               outputPath: 'assets/fonts/'
//             }
//           }
//         ],
//         exclude: /node_modules/
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin({ // define where to save the file
//       filename: 'css/[name].bundle.css',
//       allChunks: true
//     })
//   ],
//   devtool: 'source-map'
// };