const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Cliente = require('./clienteModel');

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
  },

  idCliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'clientes',
      key: 'idCliente'
    }
  },
  
});


Veiculo.belongsTo(Cliente, { foreignKey: 'idCliente' });// indica que a tabela Veiculo pertence a um Cliente, e usa a coluna idCliente como chave estrangeira.

module.exports = Veiculo;
