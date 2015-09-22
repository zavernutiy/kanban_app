var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
    entry: path.resolve(ROOT_PATH, 'app'),
    resolve: {
        extenstions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: path.resolve(ROOT_PATH, 'app')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Kanban app'
        })
    ]
};

if(TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    lodaers: ['babel'],
                    include: path.resolve(ROOT_PATH, 'app')
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            port: 4000
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    })
}