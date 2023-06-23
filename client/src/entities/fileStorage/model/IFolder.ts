import {FileStorageItemType, IFileStorageItem} from "./IFileStorageItem";


export interface IFolder extends IFileStorageItem {
    type: FileStorageItemType.FOLDER;
}