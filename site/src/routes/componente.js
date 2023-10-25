var express = require("express");
var router = express.Router();

var componenteController = require("../controllers/componenteController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res){
    componenteController.cadastrarComponente(req, res);
});
module.exports = router; 