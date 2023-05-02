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
  dataInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  dataFim: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  valorTotal: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
});

// definir o relacionamento entre Alocacao, Cliente e Veiculo
Locacao.belongsTo(Cliente, { foreignKey: 'idCliente' });
Locacao.belongsTo(Veiculo, { foreignKey: 'idVeiculo' });

// definir o relacionamento inverso entre Cliente e Alocacao
Cliente.hasMany(Locacao, { foreignKey: 'idCliente' });

// definir o relacionamento inverso entre Veiculo e Alocacao
Veiculo.hasMany(Locacao, { foreignKey: 'idVeiculo' });

module.exports = Locacao;
