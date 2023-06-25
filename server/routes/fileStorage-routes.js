const Router = require('express')
const router = new Router()
const FileStorageController = require('../controllers/fileStorage/fileStorage-controller')
const FileStorageItemController = require('../controllers/fileStorage/fileStorageItem-controller')

//storage
router.get('/storage', FileStorageController.getFileStorage)
router.get('/all-content', FileStorageController.getAllContent)
router.get('/root-content', FileStorageController.getRootContent)

//items
router.post('/item', FileStorageItemController.createFileStorageItem)
router.get('/item/:id', FileStorageItemController.getFileStorageItem)
router.put('/item/:id', FileStorageItemController.updateFileStorageItem)
router.delete('/item/:id', FileStorageItemController.deleteFileStorageItem)
router.delete('/items', FileStorageItemController.deleteFileStorageItems)

module.exports = router