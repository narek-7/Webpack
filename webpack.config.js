const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'build.js',
	},
	devServer: {
		open: true,
		compress: true,
		port: 4000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						]
					}
				}
			}
		],
	},
};