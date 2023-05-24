'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class FileStorage extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.UsersModel)
            this.hasMany(models.SharedItemsLinksModel, {foreignKey: 'fileStorageId'})
            this.hasMany(models.FileStorageItemsModel, {foreignKey: 'fileStorageId'})
        }
    }

    FileStorage.init({
        userId: DataTypes.INTEGER,
        fullPath: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'FileStorage',
    });
    return FileStorage;
};