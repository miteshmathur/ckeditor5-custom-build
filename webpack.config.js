/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const path = require('path');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: path.resolve(__dirname, 'src/ckeditor.js'),

    output: {
        path: path.resolve(__dirname, 'dist/ckeditor5_36.0.1'),
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
            // CKEditor SVG icons → raw strings (CSP-safe)
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                use: ['raw-loader']
            },

            // CKEditor theme CSS
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag',
                            attributes: {
                                'data-cke': true
                            }
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
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
            },

            // Other SVGs (if any)
            {
                test: /\.svg$/,
                type: 'asset/resource'
            }
        ]
    },

    resolve: {
        extensions: ['.js'],
        alias: {
            '@ckeditor': path.resolve(__dirname, 'node_modules', '@ckeditor')
        }
    },

    ignoreWarnings: [/postcss-nesting/]
};
