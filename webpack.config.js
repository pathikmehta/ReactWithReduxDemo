//var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/app.js",
    devtool: "inline-source-map",
    //context: __dirname,
    output: {
        path: __dirname+"/build",
        filename: "bundle.min.js"
    },
    module: {
        loaders: [{
            test: /\.js|.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
