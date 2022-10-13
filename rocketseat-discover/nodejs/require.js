//https://app.rocketseat.com.br/discover/course/node-js-o-motor-da-nave/iniciando-na-pratica/criando-modulos
// Adding 'path' as required

// Adding native modules
const path = require('path')

// Adding my modules
const myMod = require('./exports')

// Printing console
console.log(path.basename(__filename))
console.log(myMod) 