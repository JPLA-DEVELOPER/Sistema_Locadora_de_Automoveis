const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

//RELACIONAMENTO
const Cliente = require('./usuarioModel')
const Veiculo = require('./veiculoModel')

const Locacao = sequelize.define('Locacao', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  valordiaria: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
  
});

// //RELACIONAMENTO
Locacao.belongsTo(Cliente);
Locacao.belongsTo(Veiculo);

module.exports = Locacao;
