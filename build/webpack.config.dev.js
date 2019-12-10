'use strict';

const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // npm i --save-dev html-webpack-plugin

module.exports = {
    mode: 'development',

    // it is the default in webpack 4, so don't need it.
    // entry: [
    //     './src/index.js'
    // ],

    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    },

    module: {
        rules: [
            // npm i --save-dev vue-loader vue-template-compiler
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },

            // npm i --save-dev @babel/core babel-loader @babel/preset-env
            {
                test: /\.js$/,
                use: 'babel-loader'
            },

            // npm i --save-dev css-loader vue-style-loader
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
};
