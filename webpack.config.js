/**
 * webpack 创建一个 Library
 * @see https://www.webpackjs.com/guides/author-libraries/#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA-library
 */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const commonOptions = {
    devtool: 'source-map',
    resolve: {
        alias: {
            '@': resolve('src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['vue-style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
    externals: {
        /* 将 lodash 外部化，不打包到 bundle.js
         * @see https://webpack.docschina.org/configuration/externals/#object
         */
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_', // 指向全局变量
        },
    },
}

module.exports = [
    {
        mode: 'production',
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'mcsdk.js',
            library: 'mcsdk',
            libraryTarget: 'umd', // 导出的变量兼容 CommonJS, AMD 和 全局变量
        },
        ...commonOptions,
    },
    {
        mode: 'production',
        entry: './src/plugins/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'plugins.js',
            library: 'plugins',
            libraryTarget: 'umd', // 导出的变量兼容 CommonJS, AMD 和 全局变量
        },
        ...commonOptions,
    },
]
