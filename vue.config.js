module.exports = {
    devServer: {
        // host:'0.0.0.0',
        // port:'8080',
        https: false,
        hotOnly: false, //热更新（webpack已实现了，这里false即可）
        proxy: {
            '/renren-fast/product/': {
                target: "http://localhost:10010",
                ws:true,
                changOrigin:true,
                pathRewrite: {
                    '/renren-fast': ''
                }
            }
        }
    }
}