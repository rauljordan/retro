const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		path.resolve(__dirname, 'src')
	],
	devtool: 'eval',
	devServer: {
    contentBase: './public'
  },
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				WEBPACK: true,
			}
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'public')
			}
		])
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: path.resolve(__dirname, 'src'),
				query: {
					presets: [ 'react-hmre' ]
				}
			},
			{
				test: /\.css/,
				loader: 'style!css!postcss',
				include: path.resolve(__dirname, 'src')
			},
			{
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
				include: path.resolve(__dirname, 'src'),
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
			{
        test: /\.json$/,
        loader: 'json-loader'
      }
		]
	},
  postcss() {
    return [autoprefixer];
  }
};
