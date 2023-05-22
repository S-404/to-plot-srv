const ApiError = require('../../exceptions/api-error')
const bcrypt = require('bcrypt')
const UserDto = require('../../dtos/user-dto')
const tokenService = require('./token-service')
const mailService = require('./mail-service')
const {UsersModel, TokensModel} = require('../../database/models')
const {Op} = require('sequelize')
const uuid = require('uuid')


class UserService {

	async handleUserData(userData) {
		const userDto = new UserDto(userData)
		const tokens = tokenService.generateTokens({...userDto})
		await tokenService.saveToken(userDto.userId, tokens.refreshToken)

		return {user: userDto, ...tokens}
	}

	async registration(username, password, email) {

		const candidate = await UsersModel.findOne({where: {[Op.or]: [{username}, {email}]}})

		if (candidate) {
			throw ApiError.BadRequest(`Username ${username} or email ${email} already used`)
		}

		const hashedPassword = await bcrypt.hash(password, +process.env.HASH_SALT)
		const activationLink = uuid.v4()

		const newUser = await UsersModel.create({username, password: hashedPassword, email, activationLink})
		await mailService.sendActivationMail(email, `${process.env.API_URL}/auth/activate/${activationLink}`)

		return await this.handleUserData(newUser)
	}

	async login(email, password) {
		const user = await UsersModel.findOne({where: {email}})
		if (!user) {
			throw ApiError.BadRequest(`User with email ${email} is not exists`)
		}
		const isPass = await bcrypt.compare(password, user.password)
		if (!isPass) {
			throw ApiError.BadRequest('Incorrect password')
		}

		return await this.handleUserData(user)
	}

	async logout(refreshToken) {
		return await tokenService.removeToken(refreshToken)
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.UnauthorizedError()
		}
		const userData = tokenService.validateRefreshToken(refreshToken)
		const tokenData = await TokensModel.findOne({where: {refreshToken}})
		if (!userData || !tokenData) {
			throw ApiError.UnauthorizedError()
		}
		const user = await UsersModel.findOne({where: {id: userData.id}})
		return await this.handleUserData(user)

	}

	async activate(activationLink) {
		const user = await UsersModel.findOne({where: {activationLink}})
		if (!user) {
			throw ApiError.BadRequest(`Invalid activation link`)
		}
		user.isActivated = true
		await user.save()
	}

	async reactivate(userId){
		const user = await UsersModel.findOne({where: {id:userId}})
		if(!user){
			throw ApiError.BadRequest(`User not found`)
		}
		await mailService.sendActivationMail(user.email, `${process.env.API_URL}/auth/activate/${user.activationLink}`)
		const userDto = new UserDto(user)
		return {user: userDto}
	}

	async getAllUsers() {
		return await UsersModel.findAll({
			attributes: ['id', 'username']
		})
	}
}

module.exports = new UserService()