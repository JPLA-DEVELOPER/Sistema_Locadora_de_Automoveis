const Sequelize = require('sequelize')
const sequelize = require('./db').sequelize

const Veiculos = sequelize.define('veiculos', {
    modelo: {
        type: Sequelize.STRING
    },
    ano: {
        type: Sequelize.INTEGER
    }
})

//Veiculos.sync({force:true})


module.exports = Veiculos
