// -- Inicio da mascara para o CNPJ -- \\
function formatarCampo(campoTexto) {
  campoTexto.value = mascaraCnpj(campoTexto.value);
}

function retirarFormatacao(campoTexto) {
  campoTexto.value = campoTexto.value.replace(/(\.|\/|\-)/g, "");
}

function mascaraCnpj(valor) {
  return valor.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    "$1.$2.$3/$4-$5"
  );
}
// -- Final da mascara do CNPJ -- \\

// -- Inicio da mascara para o Telefone -- \\
function formatarCampoTel(campoTexto) {
  campoTexto.value = mascaraTel(campoTexto.value);
}

function retirarFormatacaoTel(campoTexto) {
  campoTexto.value = campoTexto.value.replace(/(\.|\/|\-)/g, "");
}

function mascaraTel(valor) {
  return valor.replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");
}
// -- Final da mascara do telefone -- \\

// -- Função para gerar senhas -- \\
function geradorDeSenhas() {
  var caracters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
  var senha = "";

  for (var i = 0; i < 16; i++) {
    var numeroSorteado = Math.floor(Math.random() * caracters.length);
    senha += caracters.substring(numeroSorteado, numeroSorteado + 1);
  }
  return senha;
}

function enviarEmail(nome, email, senha) {
  fetch("/email/enviar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nomeUser: nome,
      emailUser: email,
      senhaUser: senha,
    }),
  })
    .then((resposta) => {
      if (resposta.ok) {
        console.log("Email enviado: " + resposta);
      }
    })
    .catch((erro) => {
      console.log("Erro ao enviar email: " + erro);
    });
}

function cadastrarEmpresa() {
  // Recupere os valores dos campos do formulário da empresa
  var nomeEmpresa = document.getElementById("nome_empresa").value;
  var cnpj = document.getElementById("cnpj_empresa").value;
  var telEmpresa = document.getElementById("telefone_empresa").value;
  var emailEmpresa = document.getElementById("email_empresa").value;
  ///////////////////////////////////////////////////////////////////////////
  var cep = document.getElementById("cep_empresa").value;
  var cidade = document.getElementById("cidade_empresa").value;
  var estado = document.getElementById("estado_empresa").value;
  var logradouro = document.getElementById("logradouro_empresa").value;
  var numero = document.getElementById("numero_logradouro_empresa").value;
  ////////////////////////////////////////////////////////////////////////////
  var nomeFuncionario = document.getElementById("nome_funcionario").value;
  var emailFuncionario = document.getElementById("email_funcionario").value;
  var telFuncionario = document.getElementById("telefone_funcionario").value;
  var cargo = document.getElementById("cargo_funcionario").value;
  var senha = document.getElementById("senha_funcionario").value;

  var empresaData = {
    nome: nomeEmpresa,
    cnpj: cnpj,
    telEmpresa: telEmpresa,
    emailEmpresa: emailEmpresa,
    cep: cep,
    cidade: cidade,
    estado: estado,
    logradouro: logradouro,
    numero: numero,
    nomeFuncionario: nomeFuncionario,
    emailFuncionario: emailFuncionario,
    telFuncionario: telFuncionario,
    cargo: cargo,
    senha: senha
  };

  fetch("empresa/cadastrarEmpresa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(empresaData),
  })
    .then(function (response) {
      // Verifique se a solicitação foi bem-sucedida
      if (response.ok) {
        return response.json(); // Se estiver tudo certo, analise a resposta JSON (se houver)
      } else {
        throw new Error("Erro ao cadastrar empresa"); // Se houver um erro, lance uma exceção
      }
    })
    .then(function (data) {
      // Lide com a resposta do servidor, se necessário
      console.log(data);
    })
    .catch(function (error) {
      // Lide com erros de solicitação, se necessário
      console.error(error);
    });
}
// -- Validações de input -- \\
function moverEmpresa() {
  var nomeEmpresa = document.getElementById("nome_empresa").value;
  var cnpj = document.getElementById("cnpj_empresa").value;
  var telEmpresa = document.getElementById("telefone_empresa").value;
  var emailEmpresa = document.getElementById("email_empresa").value;
  ///////////////////////////////////////////////////////////////////////////
  var cep = document.getElementById("cep_empresa").value;
  var cidade = document.getElementById("cidade_empresa").value;
  var estado = document.getElementById("estado_empresa").value;
  var logradouro = document.getElementById("logradouro_empresa").value;
  var numero = document.getElementById("numero_logradouro_empresa").value;



  if (
    nomeEmpresa == "" ||
    cnpj == "" ||
    telEmpresa == "" ||
    emailEmpresa == "" ||
    ///////////////////////////////////////////////////////////////////////////
    cep == "" ||
    cidade == "" ||
    estado == "" ||
    logradouro == "" ||
    numero == ""
  ) {

    alert("Preencha todos os campos corretamente!");
    if(nomeEmpresa==""){
      nome_empresa.style ='border-color: red !important'
    }
    if (cnpj=="") {
      cnpj_empresa.style ='border-color: red !important'
    }
    if (telEmpresa=="") {
      telefone_empresa.style ='border-color: red !important'
    }
    if(emailEmpresa==""){
      email_empresa.style ='border-color: red !important'
    }
    if(estado==""){
      estado_empresa.style='border-color: red !important'
    }
    if(cep==""){
      cep_empresa.style ='border-color: red !important'
    }
    
    if(cidade==""){
      cidade_empresa.style ='border-color: red !important'
    }
    if(logradouro==""){
      logradouro_empresa.style ='border-color: red !important'
    }
    if (numero=="") {
      numero_logradouro_empresa.style ='border-color: red !important'
    }

   
    
  } else {
    document.getElementById("cadastro_empresa").style.display = "none";
    document.getElementById("cadastro_funcionario").style.display = "block";
  }
}

function moverFuncionario() {
  var nomeFuncionario = document.getElementById("nome_funcionario").value;
  var emailFuncionario = document.getElementById("email_funcionario").value;
  var telFuncionario = document.getElementById("telefone_funcionario").value;
  var cargo = document.getElementById("cargo_funcionario").value;
  var senha = document.getElementById("senha_funcionario").value;

  if(
    nomeFuncionario == "" ||
    emailFuncionario == "" ||
    telFuncionario == "" ||
    cargo == "" ||
    senha == ""
  ) {
    alert("Insira as informações corretamente!")
    if(nomeFuncionario==""){
      nome_funcionario.style ='border-color: red !important'
    }
    if (emailFuncionario=="") {
      email_funcionario.style ='border-color: red !important'
    }
    if (telFuncionario=="") {
      telefone_funcionario.style = 'border-color: red !important'
    }
    if(cargo==""){
      cargo_funcionario.style = 'border-color: red !important'
    }
    if(senha==""){
      senha_funcionario.style = 'border-color: red !important' 
    }
  }
  else {
    alert("Cadastro bem sucedido! - Redirecionando...")
    cadastrarEmpresa()
    window.location.href = "./login.html";
  }
}

