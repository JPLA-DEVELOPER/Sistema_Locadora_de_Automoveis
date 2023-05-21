const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Cliente = require('./clienteModel');

const Veiculo = sequelize.define('Veiculo', {
  idVeiculo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true

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
  cor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valordiaria: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false
  }

  
});

//RELACIONAMENTOS
Veiculo.belongsTo(Cliente, { foreignKey: 'idCliente' }); // um veículo pertence a um cliente
Cliente.hasMany(Veiculo, { foreignKey: 'idCliente' }); // um cliente possui vários veículos

module.exports = Veiculo;
