const FileStorageItemService = require('../../services/fileStorage/fileStorageItem-service')

class FileStorageItemController {

    async createFileStorageItem(req, res, next) {
        try {
            const userId = req.user.userId
            const {type, name, parentItemId} = req.body
            const item = await FileStorageItemService.createFileStorageItem({userId, type, name, parentItemId})
            return res.json(item)
        } catch (e) {
            next(e)
        }
    }

    async getFileStorageItem(req, res, next) {
        try {
            const userId = req.user.userId
            const id = req.params.id
            const item = await FileStorageItemService.getFileStorageItem({userId, id})
            return res.json(item)
        } catch (e) {
            next(e)
        }
    }

    async updateFileStorageItem(req, res, next) {
        try {
            const {userId} = req.user
            const {name, parentItemId} = req.body
            const id = req.params.id
            const item = await FileStorageItemService.updateFileStorageItem({userId, name, parentItemId, id})
            return res.json(item)
        } catch (e) {
            next(e)
        }
    }

    async deleteFileStorageItem(req, res, next) {
        try {
            const {userId} = req.user
            const id = req.params.id
            const item = await FileStorageItemService.deleteFileStorageItem({userId, id})
            return res.json(item)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new FileStorageItemController()