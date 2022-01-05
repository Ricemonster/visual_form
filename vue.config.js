const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                @import "~@/styles/Settings/var.scss";
                @import "~@/styles/Tools/_sassMagic.scss";
                `,
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('imgs', resolve('src/assets/imgs'))
    }
}