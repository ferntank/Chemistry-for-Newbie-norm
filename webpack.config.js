const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const webpackEnv = process.env.NODE_ENV || 'development';

module.exports = {
	mode: webpackEnv,
	entry: "./src/ts/index.web.ts",
	devtool: "inline-source-map",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|mjs|jsx)?$/,
				exclude: [/node_modules/, /backend/],
				use: "ts-loader"
			},
			{
				test: /\.html$/,
				use: "html-loader"
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.svg/,
				use: "@svgr/webpack"
			},
			{
				test: /\.(png|jp(e*)g|gif)$/,
				use: [{
					loader: "file-loader",
					options: {
						name: "images/[hash]-[name].[ext]"
					}
				}]
			}
		]
	},
	resolve: {
		extensions: [
		  '.web.tsx',
		  '.web.ts',
		  '.tsx',
		  '.ts',
		  '.web.jsx',
		  '.web.js',
		  '.jsx',
		  '.js',
		],
		alias: Object.assign({
		  'react-native$': 'react-native-web',
		}),
	  },
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html",
			favicon: "./src/assets/ico/molecule.ico"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}