var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Portfolio Website" });
});

router.get("/home", function(req, res, next) {
    res.render("index", { title: "Home" });
});
router.get("/about", function(req, res, next) {
    res.render("about", { title: "About" });
});

router.get("/Projects", function(req, res, next) {
    res.render("Projects", { title: "Projects" });
});

router.get("/Services", function(req, res, next) {
    res.render("Services", { title: "Services" });
});

router.get("/Contact", function(req, res, next) {
    res.render("Contact", { title: "Contact" });
});
module.exports = router;