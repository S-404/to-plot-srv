import {FileStorageItemType, IFileStorageItem} from "@entities/fileStorage/model/IFileStorageItem";

export interface IAvatar extends IFileStorageItem {
    type: FileStorageItemType.AVATAR;
}