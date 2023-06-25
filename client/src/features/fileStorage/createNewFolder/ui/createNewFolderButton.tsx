import React, {FC, useEffect} from "react";
import {FileStorageItemType, useCreateFileStorageItemMutation} from "@entities/fileStorage";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import {Box, IconButton, Tooltip} from "@mui/material";
import {useTypedSelector} from "@shared/lib";
import {MyModal, useModal} from "@shared/UI/Modals";

import NewFolderForm from "./newFolderForm";

export const CreateNewFolderButton: FC = () => {
    const {isOpen, open, close} = useModal();
    const [addFolder, {isLoading, isSuccess}] = useCreateFileStorageItemMutation();
    const fileStorage = useTypedSelector(state => state.fileStorage.currentFolder);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get("name");

        if (name) {
            addFolder({
                name: `${name}`,
                parentItemId: fileStorage?.id ?? null,
                type: FileStorageItemType.FOLDER,
            });
        }
    };

    useEffect(() => {
        if (isSuccess) {
            close();
        }
    }, [isSuccess]);

    return (
        <>
            <Tooltip title="Create new folder">
                <IconButton onClick={open}>
                    <CreateNewFolderIcon/>
                </IconButton>
            </Tooltip>
            <MyModal
                title={"Put new folder name"}
                isOpen={isOpen}
                close={close}
                maxWidth={"xs"}
            >
                <Box component="form" onSubmit={handleSubmit}>
                    <NewFolderForm isLoading={isLoading}/>
                </Box>
            </MyModal>
        </>
    );
};
