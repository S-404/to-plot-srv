import React, {FC} from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import {ITableData, TableSize} from "../types";


interface MyTableBodyProps {
    visibleRows: ITableData[];
    emptyRows: number;
    selected: readonly number[];
    size: TableSize;
    handleOnCheckBoxClick: (event: React.MouseEvent<unknown>, id: number) => void;
    handleOnRowClick: (event: React.MouseEvent<unknown>, id: number) => void;
}

const MyTableBody: FC<MyTableBodyProps> = ({
                                               visibleRows,
                                               emptyRows,
                                               selected,
                                               size,
                                               handleOnCheckBoxClick,
                                               handleOnRowClick
                                           }) => {
    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    return (
        <TableBody>
            {visibleRows.map((row) => {
                const isItemSelected = isSelected(row.id.value);
                const labelId = `enhanced-table-checkbox-${row.id.value}`;

                return (
                    <TableRow
                        hover
                        onClick={(event) => handleOnRowClick(event, row.id.value)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id.value}
                        selected={isItemSelected}
                        sx={{cursor: "pointer"}}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox
                                onClick={(event) => handleOnCheckBoxClick(event, row.id.value)}
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                    "aria-labelledby": labelId,
                                }}
                            />
                        </TableCell>
                        {Object.keys(row).map((key) => (
                                !row[key].hidden &&
                                <TableCell
                                    id={key === "id" ? labelId : undefined}
                                    key={key}
                                    align={typeof row[key].value === "string" ? "left" : "right"}
                                    padding={typeof row[key].value === "string" ? "none" : "normal"}
                                    sx={{userSelect: "none"}}
                                >
                                    <Box
                                        component="span"
                                        sx={row[key].icon ?
                                            {display: "flex", alignItems: "center"} :
                                            undefined}
                                    >
                                        {row[key].icon}
                                        {row[key].value}
                                    </Box>
                                </TableCell>
                            )
                        )}
                    </TableRow>
                );
            })
            }
            {
                emptyRows > 0 && (
                    <TableRow
                        style={{
                            height: (size === "small" ? 33 : 53) * emptyRows,
                        }}
                    >
                        <TableCell colSpan={6}/>
                    </TableRow>
                )
            }
        </TableBody>
    )
        ;
};

export default MyTableBody;