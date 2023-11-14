var express = require("express");
var router = express.Router();

var dashboardGController = require("../controllers/dashboardGController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/getDowntime/:fkEmpresa", function (req, res) {
    dashboardGController.getDowntime(req, res);
})

router.get("/getServCriticos/:fkEmpresa", function (req, res) {
    dashboardGController.getServCriticos(req, res);
});

router.get("/getEstadoGeralServ/:fkEmpresa", function (req, res) {
    dashboardGController.getEstadoGeralServ(req, res);
});

router.get("/getCompProblematico/:fkEmpresa", function (req, res) {
    dashboardGController.getCompProblematico(req, res);
});

router.get("/obterDadosGrafico/:fkEmpresa", function (req, res) {
    dashboardGController.obterDadosGrafico(req, res);
});


module.exports = router;

