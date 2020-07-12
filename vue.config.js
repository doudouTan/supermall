/* module.exports = {
    configgureWebpack: {
        resolve: {
            alisa: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': "@/views"
            }
        }
    }
} */
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
