const {Sequelize} = require('sequelize')

const PG_DB = process.env.DB_SERVER_HOST + '/' + process.env.DB_USERS_DATABASE_NAME
const sequelize = new Sequelize(PG_DB)


const TokensModel = require('./models/tokens-model')(sequelize)
const UsersModel = require('./models/users-model')(sequelize)
const ProfilesModel = require('./models/users-model')(sequelize)

UsersModel.hasMany(TokensModel, {foreignKey: 'userId'})
TokensModel.belongsTo(UsersModel)

UsersModel.hasOne(ProfilesModel, {foreignKey: 'userId'})
ProfilesModel.belongsTo(UsersModel)


module.exports = {
	TokensModel,
	UsersModel,
	ProfilesModel
}