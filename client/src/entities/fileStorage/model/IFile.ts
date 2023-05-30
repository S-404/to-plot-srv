import {FileStorageItemType, IFileStorageItem} from "@entities/fileStorage/model/IFileStorageItem";


export interface IFile extends IFileStorageItem {
    type: FileStorageItemType.FILE;
    ext?: string;
}