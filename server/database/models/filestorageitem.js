'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class FileStorageItem extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.FileStoragesModel, {foreignKey: 'fileStorageId'})
            this.hasMany(models.SharedItemsLinksModel, {foreignKey: 'fileStorageItemId'})
            this.hasMany(models.FileStorageItemsModel, {foreignKey: 'parentItemId'})
            this.belongsTo(models.FileStorageItemsModel, {foreignKey: 'id'})
        }
    }

    FileStorageItem.init({
        fileStorageId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        parentItemId: DataTypes.INTEGER,
        type: DataTypes.ENUM('avatar', 'folder', 'file'),
        ext: DataTypes.STRING,
        fullPath: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'FileStorageItem',
    });
    return FileStorageItem;
};