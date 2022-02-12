module.exports = {
    chainWebpack: config => {
      config.module.rule('downloads')
        // bundle common document files
        .test(/\.(pdf|docx?|xlsx?|csv|pptx?)(\?.*)?$/)
        .use('file-loader')
          // use the file-loader
          .loader('file-loader')  
    }
  }