const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('veiculos', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  query:{raw:true}
});

module.exports = sequelize;
