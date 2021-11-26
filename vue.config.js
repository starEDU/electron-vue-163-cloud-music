const isProd = process.env.NODE_ENV === "production";

module.exports = {
    devServer:{
        // "proxy": {
        //     "/api": {
        //         "target": "http://musicapi.h5sm.com",
        //         // "target": "http://musicapi.h5sm.com",
        //         "changeOrigin": true, // 开启跨域. 默认情况下，代理时会保留主机头的来源,设置为 true 以覆盖此行为
        //         "pathRewrite": { "^/api" : "" },
        //         // ws: true,        //如果要代理 websockets，配置这个参数
        //         // secure: false,  // 如果是https接口，需要配置这个参数
        //     }
        // }
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
