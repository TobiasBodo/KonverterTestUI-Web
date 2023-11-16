const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    plugins: [


    ],
    devtool: 'inline-source-map',
    entry:
        {
        },
    output: {
        filename: '[name].js',
        clean: true//,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'

            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],

            },
        ]

    },
    resolve: {
        extensions: ['.ts', '.js']
    },
};