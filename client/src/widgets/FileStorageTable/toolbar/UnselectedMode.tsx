import React, {FC} from "react";
import Typography from "@mui/material/Typography";
import {CreateNewFolderButton} from "@features/fileStorage/createNewFolder";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";

const UnselectedMode: FC = () => {
    return (
        <>
            <>
                <Typography
                    sx={{flex: "1 1 100%"}}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    {"FileStorage"}
                </Typography>
            </>
            <>
                <CreateNewFolderButton/>
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon/>
                    </IconButton>
                </Tooltip>
            </>
        </>
    );
};

export default UnselectedMode;