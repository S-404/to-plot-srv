import React, {FC} from "react";
import {alpha} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

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
            {numSelected > 0 ?
                (props.toolBarItems.selectedModeItem)
                :
                (props.toolBarItems.unselectedModeItem)
            }
        </Toolbar>
    );
};

export default EnhancedTableToolbar;