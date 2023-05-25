const {FileStoragesModel, FileStorageItemsModel} = require('../../database/models')
const ApiError = require("../../exceptions/api-error");

class FileStorageService {

    async getFileStorageByUserId(userId) {
        const fs = await FileStoragesModel.findOne({where: {userId}})
        if (!fs) {
            return await FileStoragesModel.create({
                userId,
                fullPath: `${Date.now()}`
            })
        }
        return fs
    }


    async getAllContent(userId) {
        const fs = await this.getFileStorageByUserId(userId)
        if (!fs) {
            throw ApiError.BadRequest("not found fileStorage")
        }

        const content = await FileStorageItemsModel.findOne({where: {fileStorageId: fs.id}})
        const result = {
            avatar: [],
            folders: [],
            files: [],
            fileStorageItems: []
        }

        if (content) {
            result.avatar = content.filter(item => item.type === "avatar")
            result.folders = content.filter(item => item.type === "folder")
            result.files = content.filter(item => item.type === "file")
            result.fileStorageItems = [...result.folders, ...result.items]
        }

        return result
    }

}

module.exports = new FileStorageService()