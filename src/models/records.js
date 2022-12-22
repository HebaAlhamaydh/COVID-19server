const recordsModel = (sequelize, DataTypes) => sequelize.define('records', {
 
  country: { type: DataTypes.STRING },
  totalConfirmed: { type: DataTypes.INTEGER },
  totalDeaths: { type: DataTypes.INTEGER },
  totalRecovered: { type: DataTypes.INTEGER },
  date:  { type: DataTypes.DATE },
  userID: {type: DataTypes.INTEGER,},
},{ timestamps: false });

  

  module.exports = recordsModel;