import {FileStorageItemType, IFileStorageItem} from "@entities/fileStorage/model/IFileStorageItem";


export interface IFolder extends IFileStorageItem {
    type: FileStorageItemType.FOLDER;
}