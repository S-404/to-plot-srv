const {validationResult} = require('express-validator')
const ApiError = require('../../exceptions/api-error')
const userService = require('../../services/auth/user-service')

const REFRESH_TOKEN_MAX_AGE = 7 * 24 * 60 * 60 * 1000 //7days

class UserController {

	async registration(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest('Validation error', errors.array()))
			}
			const {username, password, email} = req.body
			const userData = await userService.registration(username, password, email)
			res.cookie('refreshToken', userData.refreshToken, {maxAge: REFRESH_TOKEN_MAX_AGE, httpOnly: true})
			return res.json(userData)
		} catch
			(e) {
			next(e)
		}
	}

	async login(req, res, next) {
		try {
			const {email, password} = req.body
			const userData = await userService.login(email, password)
			res.cookie('refreshToken', userData.refreshToken, {maxAge: REFRESH_TOKEN_MAX_AGE, httpOnly: true})
			return res.json(userData)
		} catch
			(e) {
			next(e)
		}
	}

	async logout(req, res, next) {
		try {
			const {refreshToken} = req.cookies
			const token = await userService.logout(refreshToken)
			res.clearCookie('refreshToken')
			return res.json(token)

		} catch (e) {
			next(e)
		}
	}

	async activate(req, res, next) {
		try {
			const activationLink = req.params.link
			await userService.activate(activationLink)
			return res.redirect(process.env.CLIENT_URL)
		} catch (e) {
			next(e)
		}
	}

	async refreshToken(req, res, next) {
		try {
			const {refreshToken} = req.cookies
			const userData = await userService.refresh(refreshToken)
			res.cookie('refreshToken', userData.refreshToken, {maxAge: REFRESH_TOKEN_MAX_AGE, httpOnly: true})
			return res.json(userData)
		} catch (e) {
			next(e)
		}
	}

	async getAllUsers(req, res, next) {
		try {
			const users = await userService.getAllUsers()
			return res.json(users)
		} catch (e) {
			next(e)
		}
	}
}

module.exports = new UserController()