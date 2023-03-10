"use strict";
require('dotenv').config();

// Connects to our database depending on the URI as an environmental variable
const { Sequelize, DataTypes } = require("sequelize");

const recordsModel  = require('./records');
const userModel=require('./users');
const Collection =require('./data-collection');

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
                ssl :{require: true,
                    rejectUnauthorized: false},
                native: true
            }
        } : {};


// we are going to use this to connect to Postgres
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const recordsTable = recordsModel (sequelize, DataTypes);
const userTable = userModel(sequelize, DataTypes);
//  const usersCollection = new Collection(usersTable);

//relations database
userTable.hasMany(recordsTable); //one user has many record
recordsTable.belongsTo(userTable); 

module.exports = {
    sequelize: sequelize,
    DataTypes:DataTypes,
    records:new Collection(recordsTable),
    Users:userModel(sequelize, DataTypes)
};

