const Router = require('express')
const router = new Router()
const userController = require('../controllers/auth/user-controller')
const {check} = require('express-validator')

router.post(
	'/registration',
	check('username', 'Incorrect username length').isLength({min: 4, max: 16}),
	check('password', 'Incorrect password length').isLength({min: 3, max: 32}),
	userController.registration)

router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refreshToken)

module.exports = router