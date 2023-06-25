const {FileStorageItemsModel} = require('../../database/models')
const ApiError = require('../../exceptions/api-error')
const FileStorageService = require('./fileStorage-service')

class FileStorageItemService {

    #defineExt(name = '') {
        const parts = name.split('.')
        return parts.length ? parts[parts.length - 1] : ''
    }

    async #defineStorage(userId, parentItemId, name) {
        const fileStorage = await FileStorageService.getFileStorageByUserId(userId)
        let parent = fileStorage

        if (parentItemId) {
            const parentFSItem = await this.getFileStorageItem({userId, id: parentItemId})
            parent = parentFSItem || parent;
        }

        return {
            fileStorage,
            fullPath: `${parent.fullPath}/${name}`
        }
    }

    async createFileStorageItem({userId, type, name, parentItemId = null}) {
        const check = await FileStorageItemsModel.findOne({where: {parentItemId, name, type}})
        if (check) {
            throw ApiError.BadRequest(`This destination already contains a ${type} named '${name}'`)
        }

        const {fileStorage, fullPath} = await this.#defineStorage(userId, parentItemId, name)
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
        const fileStorage = await FileStorageService.getFileStorageByUserId(userId)

        return await FileStorageItemsModel.findOne({
            where: {
                fileStorageId: fileStorage.id,
                id
            },
            include: [{
                model: FileStorageItemsModel,
                as: "content",
                where: {
                    fileStorageId: fileStorage.id,
                    parentItemId: id,
                },
                required: false,
            }],
        })
    }
    async getItemContent({userId, id}) {
        if(isNaN(Number(id))){
            return await FileStorageService.getRootContent(userId);
        }

        const fileStorage = await FileStorageService.getFileStorageByUserId(userId)

        return await FileStorageItemsModel.findOne({
            where: {
                fileStorageId: fileStorage.id,
                id
            },
            include: [{
                model: FileStorageItemsModel,
                as: "content",
                where: {
                    fileStorageId: fileStorage.id,
                    parentItemId: id,
                },
                required: false,
            }],
        })
    }

    async updateFileStorageItem({userId, name, parentItemId, id}) {
        const item = await this.getFileStorageItem({userId, id})

        if (!item) {
            throw ApiError.BadRequest(`File storage item with id '${id}' is not found`)
        }

        const {fullPath} = await this.#defineStorage(userId, parentItemId, name)

        item.name = name
        item.parentItemId = parentItemId
        item.fullPath = fullPath

        return await item.save()
    }

    async deleteFileStorageItems({userId, ids}) {
        return await FileStorageItemsModel.destroy({
            where: {
                id: ids,
                userId
            }
        })
    }

    async deleteFileStorageItem({userId, id}) {
        const item = await this.getFileStorageItem({userId, id})

        if (!item) {
            throw ApiError.BadRequest(`File storage item with id '${id}' is not found`)
        }

        return await item.destroy()
    }
}

module.exports = new FileStorageItemService()