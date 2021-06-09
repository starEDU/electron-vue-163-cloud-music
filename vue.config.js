const isProd = process.env.NODE_ENV === "production";

module.exports = {
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
