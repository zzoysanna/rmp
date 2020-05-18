const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].[hash].css',
        }),
    ],
    watch: false
});
