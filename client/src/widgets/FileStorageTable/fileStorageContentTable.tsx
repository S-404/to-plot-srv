import React, {FC, useEffect, useMemo} from "react";
import {useDispatch} from "react-redux";
import {
    FileStorageItemType,
    IFileStorageItem,
    setCurrentFolder,
    useGetFileStorageItemQuery,
    useLazyGetFileStorageItemQuery
} from "@entities/fileStorage";
import {ContentType} from "@entities/fileStorage/api/types";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Typography from "@mui/material/Typography";
import {useTypedSelector} from "@shared/lib";
import {ITableData, IToolBarProps, MyTable} from "@shared/UI/MyTable";

import {headCells} from "./lib/headCells";
import SelectedMode from "./toolbar/SelectedMode";
import UnselectedMode from "./toolbar/UnselectedMode";

interface ICreateDataProps extends IFileStorageItem {
    ext?: string;
    type: FileStorageItemType.FILE | FileStorageItemType.FOLDER;
}

const createData = (props: ICreateDataProps): ITableData => {
    return {
        id: {value: props.id, hidden: true},
        name: {value: props.name, icon: props.type === "file" ? <InsertDriveFileIcon/> : <FolderIcon/>},
        ext: {value: props.ext ?? ""},
        type: {value: props.type},
        updatedAt: {value: props.updatedAt},
        createdAt: {value: props.createdAt},
    };
};

const FileStorageContentTable: FC = () => {

    const currentFolder = useTypedSelector(state => state.fileStorage.currentFolder);
    const dispatch = useDispatch();
    const [getFileStorageItem] = useLazyGetFileStorageItemQuery();
    const {data: currentFolderContent} = useGetFileStorageItemQuery(currentFolder?.id || null, {
        refetchOnMountOrArgChange: currentFolder?.id,
    });

    useEffect(() => console.debug("fileStorageItem", currentFolderContent), [currentFolderContent]);

    const rows: ITableData[] = useMemo(() => {
        let result: ITableData[] = [];
        const data: ContentType[] = currentFolderContent?.content ?? [];
        if (data?.length) {
            result = data.reduce((prev: ITableData[], curr) => {
                const row = [...prev];
                row.push(createData({...curr}));
                return row;
            }, []);
        }
        return result;
    }, [currentFolderContent]);

    const [selected, setSelected] = React.useState<readonly number[]>([]);

    const doubleClickHandler = (id: number) => {
        getFileStorageItem(id)
            .then((item) => {
                console.debug("getFileStorageItem item", item.data);
                if (
                    item?.data &&
                    item.data.type === FileStorageItemType.FOLDER
                ) {
                    dispatch(setCurrentFolder(item.data));
                }
            });

        setSelected([]);
    };

    const onClickItemHandler = (items: typeof selected) => {
        if (selected.length === 1 &&
            items.length === 1 &&
            selected[0] === items[0]) {
            doubleClickHandler(selected[0]);
        } else {
            setSelected(items);
        }
    };


    const toolBarProps: IToolBarProps = {
        toolBarItems: {
            unselectedModeItem: <UnselectedMode/>,
            selectedModeItem: <SelectedMode selected={selected}/>
        }
    };

    return (
        <>
        <Typography>Path: {currentFolder ? currentFolder.fullPath : "/"}</Typography>
        <MyTable
            headCells={headCells}
            rows={rows}
            toolBarProps={toolBarProps}
            selected={selected}
            setSelected={onClickItemHandler}
            initialOrderBy={"type"}
            size={"small"}
            showCheckbox={true}
            handleDoubleClick={doubleClickHandler}
        />
        </>
    );
};

export default FileStorageContentTable;