const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Cliente = sequelize.define('Cliente', {
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
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone:{
    type: DataTypes.INTEGER
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
});

module.exports = Cliente;
