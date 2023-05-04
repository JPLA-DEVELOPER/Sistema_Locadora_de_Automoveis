const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('locadora', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  query:{raw:true}
});

module.exports = sequelize;
