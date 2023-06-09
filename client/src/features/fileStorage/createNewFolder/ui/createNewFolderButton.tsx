import React, {FC} from "react";
import NewFolderForm from "@features/fileStorage/createNewFolder/ui/newFolderForm";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import {Box, IconButton, Tooltip} from "@mui/material";
import {MyModal, useModal} from "@shared/UI/Modals";


export const CreateNewFolderButton: FC = () => {
    const {isOpen, open, close} = useModal();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get("name");

        if (name) {
            console.debug("name", name);
        }

    };

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
                    <NewFolderForm/>
                </Box>
            </MyModal>
        </>
    );
};
