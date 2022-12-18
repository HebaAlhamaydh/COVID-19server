const recordsModel = (sequelize, DataTypes) => sequelize.define('records', {
 
  country: { type: DataTypes.STRING },
  totalConfirmed: { type: DataTypes.INTEGER },
  totalDeaths: { type: DataTypes.INTEGER },
  totalRecovered: { type: DataTypes.INTEGER },
  date:  { type: DataTypes.DATE },
},{ timestamps: false });

  

  module.exports = recordsModel;