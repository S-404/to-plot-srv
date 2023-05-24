const {FileStoragesModel, FileStorageItemsModel} = require('../../database/models')
const ApiError = require("../../exceptions/api-error");

class FileStorageService {
    async createFileStorage(userId) {
        return await FileStoragesModel.create({
            userId,
            path: `${Date.now()}`
        })
    }

    async getFileStorage(userId) {
        return await FileStoragesModel.findOne({where: {userId}})
    }


    async getAllContent(userId) {
        const fs = await this.getFileStorage(userId)
        if (!fs) {
            ApiError.BadRequest("not found fileStorage")
        }
        const content = await FileStorageItemsModel.find({where: {fileStorageId: fs.id}})
        const avatar = content.filter(item => item.type === "avatar")
        const folders = content.filter(item => item.type === "folder")
        const files = content.filter(item => item.type === "file")
        const fileStorageItems = [...folders,...files]
        return {
            avatar,
            folders,
            files,
            fileStorageItems
        }
    }

}

module.exports = new FileStorageService()