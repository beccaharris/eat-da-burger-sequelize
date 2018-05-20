var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define('burgers', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });
  return Burgers;
};