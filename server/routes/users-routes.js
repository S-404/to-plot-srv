const Router = require('express')
const userController = require('../controllers/auth/user-controller')
const router = new Router()

router.get('/all', userController.getAllUsers)
router.get('/reactivate', userController.reactivate)

module.exports = router