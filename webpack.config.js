const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./lib/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "ocl.min.js",
        libraryTarget: "umd",
        libraryExport: "OclEngine"
    },

    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.tsx?$/,
                use: 'tslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                output: {
                    comments: false,
                }
            }
        })
    ]
};
