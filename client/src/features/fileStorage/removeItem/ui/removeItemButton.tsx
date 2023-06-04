import React, {FC} from "react";
import {useDeleteFileStorageItemMutation, useDeleteFileStorageItemsMutation} from "@entities/fileStorage";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {MyAlert, useModal} from "@shared/UI/Modals";


interface IRemoveItemButtonProps {
    ids: readonly number[];
}

export const RemoveItemButton: FC<IRemoveItemButtonProps> = ({ids}) => {

    const [deleteItem] = useDeleteFileStorageItemMutation();
    const [deleteItems] = useDeleteFileStorageItemsMutation();
    const {isOpen, open, close} = useModal();

    const deleteItemTrigger = () => {
        if (ids.length === 1) {
            deleteItem(ids[0]);
        } else {
            deleteItems([...ids]);
        }

    };

    return (
        <>
            <Tooltip title="Delete">
                <IconButton onClick={open}>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
            <MyAlert
                title={"Remove item from file storage"}
                text={"This item will be removed"}
                onConfirm={deleteItemTrigger}
                isOpen={isOpen}
                close={close}
            />
        </>
    );
};
