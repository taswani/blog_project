const proxy = require("http-proxy-middleware"); //Due to issues with create-react-app, the proxy can't be a string, so its necessary to give it a file instead

module.exports = function(app) {
  app.use(proxy("/api/posts", { target: "http://localhost:5000/" }));
};
