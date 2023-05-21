const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Cliente = sequelize.define('Cliente', {
  idCliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone:{
    type: DataTypes.STRING
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
});

module.exports = Cliente;
