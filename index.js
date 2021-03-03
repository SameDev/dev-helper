const os = require('os');

let appObj = {
               nome: "DevHelper",
               version: "(1.0.0) BETA",
               test: null
}

let temporario = "Em Construção Aguarde! ;)";

function app(message)  {
               console.log(message);
               console.table(appObj);
}

app(temporario);