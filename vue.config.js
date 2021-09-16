// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "",
  lintOnSave: true, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@v", resolve("src/views"))
      .set("@c", resolve("src/components"))
      .set("@a", resolve("src/assets"))
      .set("@u", resolve("src/utils"))
      //修改npm
      // .set('./el-table',path.resolve(__dirname, 'src/assets/el-table.js'));
    config.optimization.runtimeChunk("single");
  },
  devServer: {
    // host: "localhost",
    /* 本地ip地址 */
    host: "0.0.0.0", //局域网和本地访问
    port: "8081",
    hot: true,
    /* 自动打开浏览器 */
    open: false,
    overlay: {
      warning: false,
      error: true
    },
    /* 跨域代理 */
    proxy: {
      "/api": {
        /* 目标代理服务器地址 */
        target: "", //目标地址
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
