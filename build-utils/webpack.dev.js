// const { DefinePlugin } = require("webpack")

const DotenvWebpackPlugin = require("dotenv-webpack");

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        proxy:{
            '/api/*' : {
              target: 'http://localhost:8080/', 
              changeOrigin: true,
            }
        }
    },
    plugins: [
        new DotenvWebpackPlugin({
            path: './.env.development'
        })
        // new DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('development'),
        //     }
        // })
    ]
};

