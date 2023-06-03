import React, {FC} from "react";
import {alpha} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import {IToolBarProps} from "../types";

interface EnhancedTableToolbarProps extends IToolBarProps {
    numSelected: number;
}

const EnhancedTableToolbar: FC<EnhancedTableToolbarProps> = (props) => {
    const {numSelected} = props;

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{flex: "1 1 100%"}}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{flex: "1 1 100%"}}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    {props.title}
                </Typography>
            )}
            {numSelected > 0 ?
                (<>{props.toolBarItems.selectedModeItem}</>)
                :
                (<>{props.toolBarItems.unselectedModeItem}</>)
            }
        </Toolbar>
    );
};

export default EnhancedTableToolbar;