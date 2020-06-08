const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'less-loader'
                ]
            },
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'styles.css',
        }),
    ]
});
