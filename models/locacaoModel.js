const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Cliente = require('./clienteModel');
const Veiculo = require('./veiculoModel');

const Locacao = sequelize.define('Locacao', {
  idLocacao: {
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
    type: DataTypes.STRING,
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
    type: DataTypes.INTEGER,
    allowNull: false
  }

  
});

Locacao.belongsTo(Cliente, { foreignKey: 'idCliente' });
Locacao.belongsTo(Veiculo, { foreignKey: 'idVeiculo' });

module.exports = Locacao;
