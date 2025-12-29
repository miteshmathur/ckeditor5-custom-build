'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: path.resolve(__dirname, 'src/ckeditor.js'),

    output: {
        path: path.resolve(__dirname, 'dist/ckeditor5'),
        filename: 'ckeditor.js',
        library: 'ClassicEditor',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 2018,
                    compress: {
                        passes: 2,
                        pure_getters: true
                    },
                    format: {
                        comments: false
                    }
                },
                extractComments: false
            })
        ]
    },

    module: {
        rules: [
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                use: ['raw-loader']
            },
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: styles.getPostCssConfig({
                                themeImporter: {
                                    themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
                                },
                                minify: true
                            })
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],

    resolve: {
        extensions: ['.js']
    },

    ignoreWarnings: [/postcss-nesting/]
};
