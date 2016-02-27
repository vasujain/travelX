var path = require('path');
module.exports = {
    entry: './app/js/app.js',
    output: {
        path: path.resolve(__dirname + '/app/js/build'),
        filename: 'bundle.js',
        publicPath: 'app/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devServer: {
        contentBase: './app',
        proxy: {
            '/carrier-reports*': {
                target: 'http://127.0.0.1',
                secure: false,
                bypass: function(req, res, proxyOptions) {
                    if (req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html';
                    }
                }
            }
        },
        host: '127.0.0.1'
    },
    resolve: {
        modulesDirectories: [
            'node_modules'
        ]
    }
};
