'use strict';
require('dotenv').config()
const Sequelize = require('sequelize');
const envConfigs =  require('../config/config');


const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];

const db = {};

let sequelize;
if (config.url) {
    sequelize = new Sequelize(config.url, config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//user
db.UsersModel = require('./user')(sequelize, Sequelize.DataTypes);
db.TokensModel = require('./token')(sequelize, Sequelize.DataTypes);

//fileStorage
db.FileStoragesModel = require('./filestorage')(sequelize, Sequelize.DataTypes);
db.FileStorageItemsModel = require('./filestorageitem')(sequelize, Sequelize.DataTypes);
db.SharedItemsLinksModel = require('./shareditemslink')(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
