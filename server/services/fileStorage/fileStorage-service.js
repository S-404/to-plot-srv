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

        const content = await FileStorageItemsModel.findAll({where: {fileStorageId: fs.id}})
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
            result.fileStorageItems = [...result.folders, ...result.files]
        }

        return result
    }

    async getRootContent(userId) {
        const fs = await this.getFileStorageByUserId(userId)
        if (!fs) {
            throw ApiError.BadRequest("not found fileStorage")
        }

        const content = await FileStorageItemsModel.findAll({
            where: {
                fileStorageId: fs.id,
                parentItemId: null
            }
        })
        const result = {
            content: []
        }

        if (content) {
            const folders = content.filter(item => item.type === "folder")
            const files = content.filter(item => item.type === "file")
            result.content = folders.concat(files);
        }

        return result
    }

}

module.exports = new FileStorageService()