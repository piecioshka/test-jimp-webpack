module.exports = {
    entry: './test/index.js',
    output: {
        pathinfo: true,

        filename: './dist/test-lena.js'
    },
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty",
        http: "empty"
    },
    module: {
        loaders: [
            {
                test: /\.json/,
                loader: 'json'
            }
        ]
    }
};
