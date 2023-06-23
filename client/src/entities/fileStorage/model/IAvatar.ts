import {FileStorageItemType, IFileStorageItem} from "./IFileStorageItem";

export interface IAvatar extends IFileStorageItem {
    type: FileStorageItemType.AVATAR;
}