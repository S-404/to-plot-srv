import {FileStorageItemType, IAvatar, IFile, IFileStorage, IFolder} from "@entities/fileStorage/model";


export type GetStorageResult = IFileStorage

export type GetAllContentResult = {
    avatar: IAvatar[];
    folders: IFolder[];
    files: IFile[];
    fileStorageItems: (IFile | IFolder)[];
}

type FileStorageItem = IAvatar | IFolder | IFile

export type CreateFileStorageItemQuery = {
    type: FileStorageItemType;
    name: string;
    parentItemId: number;
}
export type CreateFileStorageItemResult = FileStorageItem


export type GetFileStorageItemQuery = number
export type GetFileStorageItemResult = FileStorageItem

export type UpdateFileStorageItemQuery = {
    body: {
        name: string;
        parentItemId: number;
    };
    id: number;
}
export type UpdateFileStorageItemResult = FileStorageItem

export type DeleteFileStorageItemQuery = number

