import {FileStorageItemType, IAvatar, IFile, IFileStorage, IFolder} from "../";


export type GetStorageResult = IFileStorage

export type GetAllContentResult = {
    avatar: IAvatar[];
    folders: IFolder[];
    files: IFile[];
    content: ContentType[];
}

export type GetRootContentResult = {
    content: ContentType[];
}


export type ContentType = IFile | IFolder;
type FileStorageItem = IAvatar | IFolder | IFile

export type CreateFileStorageItemQuery = {
    type: FileStorageItemType;
    name: string;
    parentItemId: number | null;
}
export type CreateFileStorageItemResult = FileStorageItem


export type GetFileStorageItemQuery = number | null
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

export type DeleteFileStorageItemsQuery = number[]

