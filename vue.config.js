module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,

        }
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#c62f2f',
                        'link-color': '#c62f2f',
                        'border-radius-base': '4px',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
}
