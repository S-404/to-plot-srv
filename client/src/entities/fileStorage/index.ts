import fileStorageSlice from "./model/fileStorageSlice";
import {FileStorageItemType} from "./model/IFileStorageItem";

export {
    fileStorageApi,
    useCreateFileStorageItemMutation,
    useDeleteFileStorageItemMutation,
    useDeleteFileStorageItemsMutation,
    useGetAllContentQuery,
    useGetFileStorageItemQuery,
    useGetRootContentQuery,
    useGetStorageQuery,
    useLazyGetFileStorageItemQuery,
    useUpdateFileStorageItemMutation,
} from "./api/fileStorageApi";
export type {ContentType} from "./api/types";
export {setCurrentFolder} from "./model/fileStorageSlice";
export type {IAvatar} from "./model/IAvatar";
export type {IFile} from "./model/IFile";
export type {IFileStorage} from "./model/IFileStorage";
export type {IFileStorageItem} from "./model/IFileStorageItem";
export type {IFolder} from "./model/IFolder";

export {FileStorageItemType, fileStorageSlice};