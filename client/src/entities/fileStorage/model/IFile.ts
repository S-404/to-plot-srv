import {FileStorageItemType, IFileStorageItem} from "./IFileStorageItem";

export interface IFile extends IFileStorageItem {
    type: FileStorageItemType.FILE;
    ext?: string;
}