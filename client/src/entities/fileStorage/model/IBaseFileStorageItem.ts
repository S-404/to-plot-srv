import {ContentType} from "@entities/fileStorage/api/types";

export interface IBaseFileStorageItem {
    id: number;
    fullPath: string;
    createdAt: string;
    updatedAt: string;
    content?: ContentType[];
}