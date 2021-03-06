const path = require('path');
const webpack = require('webpack');
const {CheckerPlugin} = require('awesome-typescript-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// function test(options) {}
// test.prototype.apply = function(compiler) {
//     compiler.plugin('done', function() {
//         console.log('\x1Bc');
//     });
//     compiler.hooks.afterCompile.tap('clear', () => {
//         console.log('\x1Bc');
//     })
// };

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: ['./resources/typescript/main.ts', './resources/sass/main.sass'],
    optimization: {
        splitChunks: {
            cacheGroups: {
                style: {
                    name: 'style',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    stats: { children: false },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
        new webpack.DefinePlugin({
            DEV: true
        }),
        new CheckerPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin([
            {from: './resources/assets', to: 'assets'}
        ]),
    ],
    resolve: {
        extensions: ['.ts', '.js', '.css', '.scss', '.sass'],
        modules: ["node_modules"]
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'public/'),
        publicPath: '/public/',
        pathinfo: false
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules|\.spec\.ts$)/,
                enforce: 'post',
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: {
                        esModules: true
                    }
                },
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'assets/images/[name].[ext]',
                        limit: 1024,
                    },
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'assets/fonts/[name].[ext]',
                        limit: 1024,
                    },
                },
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "node_modules/bootstrap/js/src/")
                ],
                use: {
                    loader: 'babel-loader',
                }
            },
            // {
            //     test: /\.ts$/,
            //     enforce: 'pre',
            //     use: [
            //         {
            //             loader: 'tslint-loader',
            //             options: {
            //                 "format": "codeFrame",
            //                 "formatter": "codeFrame"
            //             }
            //         }
            //     ]
            // },
            // {
            //     test: /\.js$/,
            //     enforce: 'pre',
            //     use: [
            //         {
            //             loader: 'eslint-loader'
            //         }
            //     ]
            // },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: path.resolve(__dirname, 'tsconfig.json'),
                            declaration: false,
                            useBabel: true,
                            useCache: true,
                            babelCore: "@babel/core",
                        },
                    },

                ],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: "css-loader", options: {sourceMap: true}},
                    {loader: "postcss-loader", options: {sourceMap: 'inline'}},
                    'resolve-url-loader',
                    {loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            includePaths: ['./resources/sass/', './node_modules'],
                            outputStyle: 'expanded'
                        }
                    }
                ]
            }
        ]
    }
};