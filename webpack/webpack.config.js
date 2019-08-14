const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//node 下的path
const ExtracTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode:"development",
    entry:{
        //   ./是当前路径
        index:'./src/index.js'
    },
    output:{
        //出口是绝对路径
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        
        rules:[
            {
                test:/\.css$/,
                use:ExtracTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },{
                test: /\.(png|jpg|gif)/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtracTextPlugin("css/index.css")
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost'
    }
}
