const Sequelize = require('sequelize');
const db = require('../database');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://s-media-cache-ak0.pinimg.com/originals/53/0f/e3/530fe38e8bef56d41990f5294d49dc3c.jpg',
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Campus;
