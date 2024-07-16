const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWPlugin } = require('clean-webpack-plugin')
const miniCss = require('mini-css-extract-plugin')
const terser = require('terser-webpack-plugin')
const cssMinimizer = require('css-minimizer-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    optimization: {
        minimizer: [new terser({}), new cssMinimizer({})],
    },
    output:{
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWPlugin({
            // simulation of files removal
            dry: true,
            // log registration
            verbose: true,
            // auto remove of all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new miniCss({ filename: "[name].css"}),
        new WorkboxPlugin.GenerateSW()
    ],

}
