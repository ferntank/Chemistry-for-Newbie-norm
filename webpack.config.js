const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");


module.exports = {
	entry: "./src/ts/index.tsx",
	devtool: "inline-source-map",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
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
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html",
			favicon: "./src/assets/ico/molecule.ico"
		})
	]
}