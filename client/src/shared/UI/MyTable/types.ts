import React from "react";


export interface IToolBarProps {
    title: string;
    toolBarItems: {
        selectedModeItem: React.ReactElement;
        unselectedModeItem: React.ReactElement;
    };
}

export interface ITableDataItem {
    value: string | number;
    icon?: React.ReactElement;
    hidden?: boolean;
}

export interface ITableData {
    id: { value: number } & ITableDataItem;
    [key: string]: ITableDataItem;
}

export interface IHeadCell {
    disablePadding: boolean;
    id: keyof ITableData;
    label: string;
    numeric: boolean;
    hidden?: boolean;
}

export type Order = "asc" | "desc";

export type TableSize = "small" | "medium"

export interface IEnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof ITableData) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
    headCells: IHeadCell[];
}

