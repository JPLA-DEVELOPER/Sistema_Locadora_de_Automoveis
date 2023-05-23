const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  senha:{
    type: DataTypes.STRING
  }
  
});


module.exports = Usuario;
