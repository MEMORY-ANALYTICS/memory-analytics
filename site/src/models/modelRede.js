var database = require("../database/config");

function listar(fkEmpresa) {
    var query = `SELECT * FROM servidor JOIN componente ON fkServidor=idServidor WHERE fkEmpresa = ${fkEmpresa} AND tipoComponente = 'REDE';`;
  
    return database.executar(query);
  }

  function pegarIdComponente(fkServidor) {
    var query = `SELECT idComponente FROM componente WHERE fkServidor = ${fkServidor} AND tipoComponente = 'REDE';`;
  
    return database.executar(query);
  }

  function pegarIdComponente2(fkServidor) {
    var query = `SELECT idComponente FROM componente WHERE fkServidor = ${fkServidor} AND tipoComponente = 'REDE';`;
  
    return database.executar(query);
  }

  function pegarKpiVelocidade(fkComponente,dataAtual) {
    var query = `SELECT min(valorRegistro) AS valorVelocidadeMin, Time(dtHoraRegistro) AS horaRegistro FROM registro WHERE 
    fkComponente = ${fkComponente} AND tipoMedida = 'MBps' AND  date(dtHoraRegistro) = '${dataAtual}' GROUP BY dtHoraRegistro LIMIT 1;`;
  
    return database.executar(query);
  }
 
  function pegarKpiLatencia(fkComponente,dataAtual) {
    var query = `SELECT max(valorRegistro) AS valorLatenciaMax, Time(dtHoraRegistro) AS horaRegistro FROM registro WHERE 
    fkComponente = ${fkComponente} AND tipoMedida = 'ms' AND  date(dtHoraRegistro) = '${dataAtual}' GROUP BY dtHoraRegistro LIMIT 1;`;
  
    return database.executar(query);
  }

  function pegarKpiPacotes(fkComponente,dataAtual) {
    var query = `SELECT AVG(valorRegistro) AS mediaDodia FROM registro WHERE fkComponente = ${fkComponente} AND DATE(dtHoraRegistro) = '${dataAtual}' AND tipoMedida = 'Pacotes' LIMIT 2;`;
  
    return database.executar(query);
  }
  // SELECT AVG(valorRegistro) AS mediaDodia FROM registro WHERE DATE(dtHoraRegistro) = '2023-12-07' AND tipoMedida = 'Pacotes';
// -------------------------------------------- Fim Kpis - Retorno de variáveis ------------------------------------------------
  function pegarLatenciaAtual(fkComponente,dataAtual) {
    var query = `
    SELECT max(valorRegistro) AS valorLatenciaAtual, Time(dtHoraRegistro) AS horaRegistro FROM registro WHERE fkComponente = ${fkComponente} AND tipoMedida = 'ms' AND  date(dtHoraRegistro) = '${dataAtual}' GROUP BY dtHoraRegistro LIMIT 1;`;
    return database.executar(query);
  }
  module.exports = {listar, pegarIdComponente, pegarKpiVelocidade, pegarKpiLatencia, pegarKpiPacotes,
    pegarLatenciaAtual};