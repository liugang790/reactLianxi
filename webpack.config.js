var path = require('path');
var webpack = require('webpack');
var config = {
    entry: require(path.resolve(__dirname, 'entry.config.js')),
    output:{
        path:"./",
        filename:'dist/js/[name].js',
        chunkFilename:'dist/js/[hash:8].chunk.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel',
            query:
            {
                presets:['es2015', 'react']
            }
            },
            {
                test:/\.(scss|sass)?$/,
                loader:'style!css!sass'
            },
            {
                test:/\.css?$/,
                loader: 'style!css'
            },
            {
                test:/\.(jpg|png|gif|jpeg)?$/,
                loader:'url?limit=20480&name=dist/images/[name].[hash:8].[ext]'
            },
            {
                test:/\.(eot|woff(2)?|ttf|svg)?(@.+)*$/,
                loader:'url?limit=20480&name=dist/other/[name].[hash:8].[ext]'
            },
            {
                test:/\.html|\.json$/,
                loader: "string"
            }
        ]
    },
    postcss: [
        require('autoprefixer')//调用autoprefixer插件
    ],
    plugins: [
    new webpack.OldWatchingPlugin()
]
};

module.exports = config;