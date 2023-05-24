const FileStorageItemsModel = require('../../database/models')
const ApiError = require('../../exceptions/api-error')
const FileStorageService = require('./fileStorage-service')

class FileStorageItemService {

    #defineExt(name = '') {
        const parts = name.split('.')
        return parts.length ? parts[parts.length - 1] : ''
    }

    async createFileStorageItem({userId, type, name, parentItemId = null}) {
        const check = await FileStorageItemsModel.findOne({where: {parentItemId, name, type}})
        if (check) {
            throw ApiError.BadRequest(`This destination already contains a ${type} named '${name}'`)
        }

        const fileStorage = await FileStorageService.getFileStorage(userId)
        const parent = parentItemId ? await this.getFileStorageItem({userId, id: parentItemId}) : fileStorage
        const fullPath = `${parent.fullPath}/${name}`
        const ext = type === "file" ? this.#defineExt(name) : null

        return await FileStorageItemsModel.create({
            fileStorageId: fileStorage.id,
            name,
            parentItemId,
            type,
            ext,
            fullPath
        })
    }

    async getFileStorageItem({userId, id}) {

    }

    async updateFileStorageItem({userId, name, parentItemId, id}) {

    }

    async deleteFileStorageItem({userId, id}) {

    }
}

module.exports = new FileStorageItemService()