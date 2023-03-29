const Router = require('express')
const userController = require('../controllers/auth/user-controller')
const router = new Router()

router.get('/all', userController.getAllUsers)

module.exports = router