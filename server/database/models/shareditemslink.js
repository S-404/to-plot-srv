'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SharedItemsLink extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.FileStoragesModel.belongsToMany(models.FileStorageItemsModel, {through: models.SharedItemsLinksModel})
            models.FileStorageItemsModel.belongsToMany(models.FileStoragesModel, {through: models.SharedItemsLinksModel})
        }
    }

    SharedItemsLink.init({
        fileStorageItemId: DataTypes.INTEGER,
        fileStorageId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'SharedItemsLink',
    });
    return SharedItemsLink;
};