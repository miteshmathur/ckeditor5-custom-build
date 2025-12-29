'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
            // CKEditor SVG icons → raw strings
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                use: ['raw-loader']
            },

            // CKEditor theme CSS → extracted file
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-import'),
                                    require('postcss-preset-env')({
                                        stage: 3
                                    }),
                                    require('cssnano')({
                                        preset: 'default'
                                    })
                                ]
                            }
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
    }
};
