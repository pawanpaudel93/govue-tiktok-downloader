const DEPLOYMENT_PATH = "/public/dist"

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? DEPLOYMENT_PATH : "/",
  outputDir: "public/dist",
  devServer: {
    // public: "localhost:8080",
    proxy: "http://localhost:8000",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    },
  },
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
};
