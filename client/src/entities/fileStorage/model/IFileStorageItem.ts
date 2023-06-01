import {IBaseFileStorageItem} from "@entities/fileStorage/model/IBaseFileStorageItem";

export enum FileStorageItemType {
    AVATAR = "avatar",
    FOLDER = "folder",
    FILE = "file"
}

export interface IFileStorageItem extends IBaseFileStorageItem {
    fileStorageId: number;
    name: string;
    parentItemId?: number;
}