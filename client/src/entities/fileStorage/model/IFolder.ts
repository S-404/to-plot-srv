import {ContentType} from "@entities/fileStorage";

import {FileStorageItemType, IFileStorageItem} from "./IFileStorageItem";

export interface IFolder extends IFileStorageItem {
    type: FileStorageItemType.FOLDER;
    content: ContentType[];
}