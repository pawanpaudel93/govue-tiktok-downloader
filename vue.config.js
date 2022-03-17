const path = require("path");
const DEPLOYMENT_PATH = "/public/dist";

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? DEPLOYMENT_PATH : "/",
  outputDir: "web/frontend/public/dist",
  pages: {
    index: {
      entry: "web/frontend/src/main.js",
      template: "web/frontend/public/index.html"
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "web/frontend/src")
      }
    }
  },
  devServer: {
    // public: "localhost:8080",
    proxy: "http://localhost:8000",
    contentBase: path.join(__dirname, "web/frontend/public"),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }
  },
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.module.rules.delete("eslint");
  }
};
