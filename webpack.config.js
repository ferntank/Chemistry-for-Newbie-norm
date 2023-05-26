const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");


module.exports = {
	entry: "./src/ts/index.ts",
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
		extensions: [".tsx", ".ts", ".js"]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html",
			favicon: "./src/assets/ico/molecule.ico"
		})
	]
}