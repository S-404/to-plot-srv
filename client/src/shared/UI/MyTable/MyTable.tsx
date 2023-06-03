import React, {FC} from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";

import EnhancedTableHead from "./components/EnhancedTableHead";
import EnhancedTableToolbar from "./components/EnhancedTableToolbar";
import MyTableBody from "./components/MyTableBody";
import {getComparator, stableSort} from "./lib/stableSort";
import {IHeadCell, ITableData, IToolBarProps,Order, TableSize} from "./types";


export interface IMyTableProps {
    size?: TableSize;
    headCells: IHeadCell[];
    rows: ITableData[];
    initialOrderBy?: keyof ITableData;
    initialOrder?: Order;
    toolBarProps: IToolBarProps;
    selected: readonly number[];
    setSelected: React.Dispatch<React.SetStateAction<readonly number[]>>;
}

export const MyTable: FC<IMyTableProps> = ({
                                               size = "medium",
                                               headCells,
                                               rows,
                                               initialOrderBy = "id",
                                               initialOrder = "asc",
                                               toolBarProps,
                                               selected,
                                               setSelected
                                           }) => {
    const [order, setOrder] = React.useState<Order>(initialOrder);
    const [orderBy, setOrderBy] = React.useState<keyof ITableData>(initialOrderBy);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof ITableData,
    ) => {
        const isAsc = orderBy === property && order === "asc";

        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id.value);

            setSelected(newSelected);

            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, ((1 + page) * rowsPerPage) - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                (page * rowsPerPage) + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Box sx={{width: "100%"}}>
            <Paper sx={{width: "100%", mb: 2}}>
                <EnhancedTableToolbar numSelected={selected.length} {...toolBarProps}/>
                <TableContainer>
                    <Table
                        sx={{minWidth: 750}}
                        aria-labelledby="tableTitle"
                        size={size}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={`${orderBy}`}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            headCells={headCells}
                        />
                        <MyTableBody
                            selected={selected}
                            visibleRows={visibleRows}
                            emptyRows={emptyRows}
                            size={size}
                            handleClick={handleClick}
                        />
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
};

