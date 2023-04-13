const Sequelize = require('sequelize')
const sequelize = require('./db').sequelize

const Veiculos = sequelize.define('veiculos', {
    modelo: {
        type: Sequelize.STRING
    },
    ano: {
        type: Sequelize.INTEGER
    },
    fabricante: {
        type: Sequelize.STRING
    },
    placa: {
        type: Sequelize.STRING
    },
    renavam: {
        type: Sequelize.STRING
    }
})

//Veiculos.sync({force:true})


module.exports = Veiculos
