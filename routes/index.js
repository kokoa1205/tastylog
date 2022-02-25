const req = require("express/lib/request");

const rooter = require("express").Router();

rooter.get("/", (req, res) => {
  res.render("./index.ejs");
})

module.exports = rooter;

