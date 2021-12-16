module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({
            unitToConvert: 'px', // 需要转换单位
            viewportWidth: 750, // 宽度
            viewportHeight: 1334, // 高度
            unitPrecision: 3, // 精度
            propList: ['*'], // 转换属性列表
            viewportUnit: 'vw', // 单位
            fontViewportUnit: 'vw', // 字体单位
            selectorBlackList: ['.ignore', '.hairlines'], // 忽略选择器
            minPixelValue: 1, // 最小值不转换
            mediaQuery: false, // 媒体查询转换单位
            replace: true, // 直接替换属性
            // exclude: /(\/|\\)(node_modules)(\/|\\)/， // 忽略 node_modules 文件夹
            include: /\/src\/|\/node_modules\/mand-mobile\// // 忽略 node_modules 文件夹
          }),
          require('autoprefixer')()
        ]
      }
    }
  }
}
