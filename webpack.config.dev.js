const path=require("path");
const ExtractTextPlugin=require('extract-text-webpack-plugin');
module.exports={
    entry:{
        main:"./src/main.js",
    },
    output:{
        path: path.resolve(__dirname,'../dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                    ]
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin("./style.css")
    ]
}