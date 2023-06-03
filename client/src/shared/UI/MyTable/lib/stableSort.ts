import {ITableData, Order} from "../types";


function descendingComparator(a: ITableData, b: ITableData, orderBy: keyof ITableData) {
    if (b[orderBy].value < a[orderBy].value) {
        return -1;
    }
    if (b[orderBy].value > a[orderBy].value) {
        return 1;
    }

    return 0;
}

export function getComparator(
    order: Order,
    orderBy: keyof ITableData,
): (
    a: ITableData,
    b: ITableData,
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
export function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);

    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);

        if (order !== 0) {
            return order;
        }

        return a[1] - b[1];
    });

    return stabilizedThis.map((el) => el[0]);
}