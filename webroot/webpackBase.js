//import { configure } from 'protobufjs';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ["babel-polyfill", "./js/game.js"],
        vendor: ['protobufjs', 'pixi.js']
    },
    output: {
        filename: "[name].[hash].js",
        chunkFilename: "[id].[hash].js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "eslint-loader",
                exclude: /node_modules/,
                enforce: 'pre'
            },
            {
                test: /\.json$/,
                use: 'json'
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }, {
                test: path.resolve(__dirname, 'node_modules', 'pixi.js'),
                use: 'ify-loader'
            }, {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader?outputStyle=expanded&includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'node_modules/pixi.js'),
                loader: 'transform-loader/cacheable?brfs',
                enforce: 'post'
                }
        ]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.[hash].js"),
        //new config.optimization.splitChunks("vendor", "vendor.[hash].js"),
        new HtmlWebpackPlugin({
            title: 'arpg',
            template: 'index.ejs'
        }),
        new webpack.DefinePlugin({
            'BACKEND_HOST': JSON.stringify(process.env.BACKEND_HOST || 'localhost'),
            'BACKEND_PORT': JSON.stringify(process.env.BACKEND_PORT || '8080'),
            '__DEBUG__': process.env.DEBUG

        })
    ]
};
