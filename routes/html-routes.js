
var path = require("path");
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/orders", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/order.html"));
  });

  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/users.html"));
  });
  app.get("/list", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/list.html"));
  });

  app.get("/choose", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/choose.html"));
  });
};




