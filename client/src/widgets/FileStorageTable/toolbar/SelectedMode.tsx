import React, {FC} from "react";
import {RemoveItemButton} from "@features/fileStorage/removeItem";
import Typography from "@mui/material/Typography";

interface SelectedModeProps {
    selected: readonly number[];
}

const SelectedMode: FC<SelectedModeProps> = ({selected}) => {
    return (
        <>
            <>
                <Typography
                    sx={{flex: "1 1 100%"}}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {selected.length} selected
                </Typography>
            </>
            <>
                {selected.length === 1 ?
                    <RemoveItemButton ids={selected}/>
                    :
                    <>
                        <RemoveItemButton ids={selected}/>
                    </>
                }
            </>

        </>
    );
};

export default SelectedMode;