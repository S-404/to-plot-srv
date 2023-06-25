import {IHeadCell} from "@shared/UI/MyTable";

export const headCells: IHeadCell[] = [
    {
        id: "id",
        numeric: true,
        disablePadding: true,
        label: "id",
        hidden: true
    },
    {
        id: "name",
        numeric: false,
        disablePadding: true,
        label: "name",
    },
    {
        id: "ext",
        numeric: false,
        disablePadding: true,
        label: "ext",
    },
    {
        id: "type",
        numeric: false,
        disablePadding: true,
        label: "type",
    },
    {
        id: "updatedAt",
        numeric: false,
        disablePadding: true,
        label: "updatedAt",
    },
    {
        id: "createdAt",
        numeric: false,
        disablePadding: true,
        label: "createdAt",
    },
];