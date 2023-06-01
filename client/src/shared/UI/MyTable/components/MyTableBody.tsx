import React, {FC} from "react";
import Checkbox from "@mui/material/Checkbox";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import {TableData, TableSize} from "../types";


interface MyTableBodyProps {
    visibleRows: TableData[];
    emptyRows: number;
    selected: readonly number[];
    size: TableSize;
    handleClick: (event: React.MouseEvent<unknown>, id: number) => void;
}

const MyTableBody: FC<MyTableBodyProps> = ({visibleRows, emptyRows, selected, size, handleClick}) => {
    const isSelected = (id: number) => selected.indexOf(id) !== -1;


    return (
        <TableBody>
            {visibleRows.map((row) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${row.id}`;

                return (
                    <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{cursor: "pointer"}}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                    "aria-labelledby": labelId,
                                }}
                            />
                        </TableCell>
                        {Object.keys(row).map((key) => (
                                key === "id" ?
                                    <TableCell
                                        key={key}
                                        id={labelId}
                                        sx={{display: "none"}}
                                    >
                                        {row.id}
                                    </TableCell>
                                    :
                                    <TableCell
                                        key={key}
                                        align={typeof row[key] === "string" ? "left" : "right"}
                                        padding={typeof row[key] === "string" ? "none" : "normal"}
                                    >
                                        {row[key]}
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