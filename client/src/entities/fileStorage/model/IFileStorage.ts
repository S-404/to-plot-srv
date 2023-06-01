import {IBaseFileStorageItem} from "@entities/fileStorage/model/IBaseFileStorageItem";

export interface IFileStorage extends IBaseFileStorageItem {
    userId: number;
}