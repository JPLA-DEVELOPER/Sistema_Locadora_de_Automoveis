const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Cliente = require('./clienteModel');
const Veiculo = require('./veiculoModel');

const Locacao = sequelize.define('Locacao', {
  idLocacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dataInicio:{
    type: DataTypes.DATE,
  },
  dataFim:{
    type: DataTypes.DATE,
  },
});

//RELACIONAMENTOS
Locacao.belongsTo(Cliente, { foreignKey: 'idCliente' }); // uma locação é feita por um cliente
Cliente.hasMany(Locacao, { foreignKey: 'idCliente' }); // um cliente pode fazer várias locações

Locacao.belongsTo(Veiculo, { foreignKey: 'idVeiculo' }); // uma locação é feita para um veículo
Veiculo.hasMany(Locacao, { foreignKey: 'idVeiculo' }); // um veículo pode ser alugado várias vezes

module.exports = Locacao;

