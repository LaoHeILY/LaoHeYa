const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//node 下的path
const ExtracTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode: "development",
    entry: {
        //   ./是当前路径
        index: './src/index.js'
    },
    output: {
        //出口是绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '../'
    },
    module: {

        rules: [
            {
                test: /\.css$/,
                use: ExtracTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'postcss-loader']
                })
            }, {
                test: /\.(png|jpg|gif)/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 500,
                        outputPath: 'images/'
                    }
                }]
            },
            {
                test: /\.(html|html)$/i,
                loader: ['html-withimg-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtracTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },{
                test:/\.js$/,
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:['@babel/preset-env']
                    }
                }],
                exclude:/node_modules/
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new ExtracTextPlugin("css/index.css")
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost'
    }
}
