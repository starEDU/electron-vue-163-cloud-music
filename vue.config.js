const isProd = process.env.NODE_ENV === "production";

module.exports = {
    devServer:{
        "proxy": {
            "/api": {
                "target": "http://h5sm.com:8088",
                "changeOrigin": true, // 开启跨域,
                "pathRewrite": { "^/api" : "" },
                // ws: true,        //如果要代理 websockets，配置这个参数
                // secure: false,  // 如果是https接口，需要配置这个参数
            }
        }
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    },
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: isProd,
        // 开启 CSS source maps?
        sourceMap: !isProd,
        // css预设器配置项
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#c62f2f',
                        'link-color': '#c62f2f',
                        'border-radius-base': '4px',
                    },
                    javascriptEnabled: true,
                    javascript: true,
                },
            },
        },
    },
}
