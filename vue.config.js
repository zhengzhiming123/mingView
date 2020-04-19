const path = require('path');
module.exports = {
    publicPath: '/mingview/',
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
                .add(path.resolve(__dirname,'packages'))
                .end()
            .use('babel')
                .loader('babel-loader')
                .tap(options => {
                    return options
                })
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'examples')
            }
        }
    },
    devServer: {
        port: 8888
    }
}