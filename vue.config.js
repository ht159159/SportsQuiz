
const isGoogle = process.env.VUE_APP_isGoogle

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/SportsQuiz/" : "/",
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/style/_variable.scss";'
      }
    }
  },
  // publicPath: isGoogle=="true" ? 'https://cdn.juyuanhe.com.cn/crazyguess/' : './',
  productionSourceMap:false,//如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  lintOnSave: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV != "production") {
      -config.output.filename("js/[name].[hash].js").end();
    }
    //config.plugins.delete("prefetch");
  },
  devServer: {
     public: "202.39.176.70:8080",
     disableHostCheck: true
   }
};
