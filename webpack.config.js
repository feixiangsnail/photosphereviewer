
var webpack = require('webpack')
    ,HtmlwebpackPlugin = require('html-webpack-plugin')
    ,packageInfo = require('./package.json')
    ,path = require('path')
    ,ROOT_PATH = path.resolve(__dirname)
    ,APP_PATH = path.resolve(ROOT_PATH, 'src')
    ,BUILD_PATH = path.resolve(ROOT_PATH, 'build/'+packageInfo.version)
    ,serverConfig = require('./dev.server.config.js')
    ,OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        path:BUILD_PATH,
        filename:'assets/bundle.js'
    },
    devtool: '#eval-source-map',
    devServer:serverConfig,
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: APP_PATH
            },
            {
                test: /\.less$/, 
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: '400000',
                    name: 'assets/img/[name]_[hash:7].[ext]'
                }
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            { 
                test: /\.(eot|woff|ttf)$/, 
                loader: 'file-loader'
             },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx','.js','.jsx'] ,
        modules: ['src' ,'node_modules'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8087' }),
        new HtmlwebpackPlugin({
            inject:true,
            hash:true,
            template:'src/index.html',
            minify:{
                removeComments:true,
                collapseWhitespace:false
            }
        })
    ]
}