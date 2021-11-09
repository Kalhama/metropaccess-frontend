/* eslint-disable */

var path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = (env, argv) => {
    env = env || 'production'  // use 'production' unless process.env.NODE_ENV is defined

    return {
        entry: ['babel-polyfill', './src/main.js'],
        output: {
            path: path.resolve(__dirname, './build'),
            filename: 'bundle-[contenthash].js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.s?[ac]ss$/i, // matches also .ass files :D
                    use: [
                        // Creates `style` nodes from JS strings
                        // false || process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: { sourceMap: true }
                        },
                        // Compiles Sass to CSS
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: {
                        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                    }
                },
                {
                    test: /\.(ttf|eot|svg|png|jpe?g|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: {
                        loader: 'file-loader'
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'bundle-[contenthash].css'
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/index.ejs'
            })
        ],
        devtool: 'source-map',
        devServer: {
            static: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}
