var webpack  = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');  
var providePlugin = new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery' });
module.exports = {
    entry : {
        index: __dirname + '/entry.js', 
    }, 
    output:{
        path: __dirname + '/out',
        filename: '[name].js',
    },
    
    module:{
        rules:[
            {
                test: /\.less$/, 
                use:[
                    "style-loader", 
                    "css-loader", 
                    "less-loader",
                ]
            },
            
            {
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },                        
            
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            
            {
                test: /\.(jpg|png)$/, 
                use: ["url-loader"] 
            }
        ]         
    },
    
    plugins: [
        providePlugin,

        new UglifyJSPlugin(),

        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true,
        }),

        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: {removeAll: true } },
          canPrint: true
        }),
    ]
}
    

                    