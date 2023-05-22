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
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  placa: {
    type:DataTypes.STRING,
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
  cor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  renavam: {
    type:DataTypes.STRING,
    allowNull: false
  },
  dataInicio:{
    type: DataTypes.DATE,
  },
  dataFim:{
    type: DataTypes.DATE,
  },
  valorDiaria: {
    type: DataTypes.FLOAT, // ou outro tipo adequado, dependendo do formato do valor
    allowNull: false
  },
  quantidadeDiarias: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  valorTotal: {
    type: DataTypes.FLOAT, // ou outro tipo adequado, dependendo do formato do valor
    allowNull: false
  }
});



//RELACIONAMENTOS
Locacao.belongsTo(Cliente, { foreignKey: 'idCliente' }); // uma locação é feita por um cliente
Cliente.hasMany(Locacao, { foreignKey: 'idCliente' }); // um cliente pode fazer várias locações

Locacao.belongsTo(Veiculo, { foreignKey: 'idVeiculo' }); // uma locação é feita para um veículo
Veiculo.hasMany(Locacao, { foreignKey: 'idVeiculo' }); // um veículo pode ser alugado várias vezes

module.exports = Locacao;

