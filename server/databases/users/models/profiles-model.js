const Sequelize = require('sequelize')

module.exports = function (sequelize) {

	return sequelize.define('profiles', {
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		userId: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		name: {
			type: Sequelize.STRING
		},
		avatarFileId: {
			type: Sequelize.INTEGER,
			allowNull: true
		}
	})
}
