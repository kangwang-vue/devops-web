module.exports = {
    outputDir: 'dist',   //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '8080',
        https: false,   //是否使用https协议
        hotOnly: true, //是否开启热更新
        proxy: {
            '/cmdbapi': {
                target: 'http://devops-test.mypaas.com.cn', //API服务器的地址
                changeOrigin: true, // 虚拟的站点需要更管origin
                rewirte: { '^/cmdbapi': '/api' }
            },
            '/brapi': {
                target: 'http://devops-test.mypaas.com.cn', //API服务器的地址
                changeOrigin: true, // 虚拟的站点需要更管origin
                rewirte: { '^/brapi': '/api' }
            }
        }
    }
}