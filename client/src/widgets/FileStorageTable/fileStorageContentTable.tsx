import React, {FC, useMemo} from "react";
import {useGetAllContentQuery} from "@entities/fileStorage";
import {FileStorageItemType} from "@entities/fileStorage/model";
import {IFileStorageItem} from "@entities/fileStorage/model/IFileStorageItem";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import {IHeadCell, ITableData, IToolBarProps, MyTable} from "@shared/UI/MyTable";

import SelectedMode from "./toolbar/SelectedMode";
import UnselectedMode from "./toolbar/UnselectedMode";


interface ICreateDataProps extends IFileStorageItem {
    ext?: string;
    type: FileStorageItemType.FILE | FileStorageItemType.FOLDER;
}

const FileStorageContentTable: FC = () => {

    const [selected, setSelected] = React.useState<readonly number[]>([]);

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

    const {data} = useGetAllContentQuery(null);



    const rows: ITableData[] = useMemo(() => {
        let result: ITableData[] = [];
        if (data?.fileStorageItems?.length) {
            result = data.fileStorageItems.reduce((prev: ITableData[], curr) => {
                const row = [...prev];
                row.push(createData({...curr}));
                return row;
            }, []);
        }
        return result;
    }, [data]);

    const headCells: IHeadCell[] = [
        {
            id: "id",
            numeric: true,
            disablePadding: true,
            label: "id",
            hidden: true
        },
        {
            id: "name",
            numeric: false,
            disablePadding: true,
            label: "name",
        },
        {
            id: "ext",
            numeric: false,
            disablePadding: true,
            label: "ext",
        },
        {
            id: "type",
            numeric: false,
            disablePadding: true,
            label: "type",
        },
        {
            id: "updatedAt",
            numeric: false,
            disablePadding: true,
            label: "createdAt",
        },
        {
            id: "createdAt",
            numeric: false,
            disablePadding: true,
            label: "createdAt",
        },
    ];


    const toolBarProps: IToolBarProps = {
        toolBarItems: {
            unselectedModeItem: <UnselectedMode/>,
            selectedModeItem: <SelectedMode selected={selected}/>
        }
    };

    return (
        <MyTable
            headCells={headCells}
            rows={rows}
            toolBarProps={toolBarProps}
            selected={selected}
            setSelected={setSelected}
            initialOrderBy={"type"}
            size={"small"}
            showCheckbox={true}
        />
    );
};

export default FileStorageContentTable;