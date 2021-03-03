const os = require('os');
const { name, version, description, author } = require('./package.json');

let appObj = {
               name: name,
               version: version,
               description: description,
               author: author
}

let temporario = "Em Construção Aguarde! ;)";

function app(message)  {
               console.log(message);
               console.table(appObj);
}

app(temporario);