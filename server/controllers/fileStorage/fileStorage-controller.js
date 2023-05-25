const fileStorageService = require('../../services/fileStorage/fileStorage-service')

class FileStorageController {

    async getFileStorage(req, res, next) {
        try {
            const {userId} = req.user
            const fsData = await fileStorageService.getFileStorageByUserId(userId)
            return res.json(fsData)
        } catch (e) {
            next(e)
        }
    }

    async getAllContent(req, res, next) {
        try {
            const {userId} = req.user
            const fsData = await fileStorageService.getAllContent(userId)
            return res.json(fsData)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new FileStorageController()