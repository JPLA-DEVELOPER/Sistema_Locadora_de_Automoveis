const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Veiculo = sequelize.define('Veiculo', {
  idVeiculo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
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
  }
});

module.exports = Veiculo;
