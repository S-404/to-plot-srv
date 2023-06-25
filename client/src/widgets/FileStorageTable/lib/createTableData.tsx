import React from "react";
import {FileStorageItemType, IFileStorageItem} from "@entities/fileStorage";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import {ITableData} from "@shared/UI/MyTable";

interface ICreateDataProps extends IFileStorageItem {
    ext?: string;
    type: FileStorageItemType.FILE | FileStorageItemType.FOLDER;
}

const createData = (
    {
        id,
        name,
        ext,
        type,
        createdAt,
        updatedAt,
    }: ICreateDataProps
): ITableData => {
    return {
        id: {value: id, hidden: true},
        name: {value: name, icon: type === "file" ? <InsertDriveFileIcon/> : <FolderIcon/>},
        ext: {value: ext ?? ""},
        type: {value: type},
        updatedAt: {value: updatedAt},
        createdAt: {value: createdAt},
    };
};

export default createData;