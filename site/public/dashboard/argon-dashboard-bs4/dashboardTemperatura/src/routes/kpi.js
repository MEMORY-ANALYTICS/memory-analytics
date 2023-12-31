var express = require("express");
var router = express.Router();
var kpiController = require("../controllers/kpiController")

router.post("/qtdIncidentes", function(req,res ){
    kpiController.qtdIncidentes(req,res);
});

router.post("/MedTemp", function(req,res ){
    kpiController.MedTemp(req,res);
});

router.post("/CpuTempMax", function(req,res ){
    kpiController.CpuTempMax(req,res);
});
router.post("/CpuTempMin", function(req,res ){
    kpiController.CpuTempMin(req,res);
});

module.exports = router;