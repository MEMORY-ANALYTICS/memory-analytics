var database = require("../database/config");

function autenticar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    email,
    senha
  );
  var instrucao = `
  SELECT idFuncionario, nomeFunc, emailFunc, telefoneFunc, fkCargo, fkEmpresa, nomeEmpresa FROM funcionario
	join login on idFuncionario = fkFuncionario JOIN empresa ON fkEmpresa = idEmpresa
  WHERE email = '${email}' AND senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
module.exports = {
  autenticar,
};
