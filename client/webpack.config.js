const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './src/index.ts',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
			},
		],
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		open: true,
	},
	plugins: [new HtmlWebpackPlugin()],
	resolve: {
		extensions: ['.ts', '.js'],
	},
};
