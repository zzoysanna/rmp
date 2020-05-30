const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports =  {
    context: path.join(__dirname, 'src'),
    entry: {
        index: ['./index.js', './styles/style.less'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    resolve: {
        extensions: ['.js', '.less'],
        alias: {
            '@': path.join(__dirname, 'src'),
            'styles': path.resolve(__dirname, 'src/styles'),
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                // use: ['babel-loader', 'eslint-loader'],
                use: ['babel-loader'],
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        // new BundleAnalyzer()
    ],
};
