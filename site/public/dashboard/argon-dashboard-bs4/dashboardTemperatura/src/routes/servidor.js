var express = require("express");
var router = express.Router();
var servidorController = require("../controllers/servidorController")

router.get("/servidor", function(req,res ){
    servidorController.getServidor(req,res);
});

module.exports = router;