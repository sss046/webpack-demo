const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-pugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: "main.js",
		path: path.resolve(__dirname,'build')
	},
	module: {
		rules: [
			{
				text: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				text: /\.scss$/,
				use: ['style-loader','css-loader','sass-loader']
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin()
	]
}