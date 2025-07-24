import { useState } from "react";
import { flexRender, 
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel} from "@tanstack/react-table";

export const Table = ({columns, data}) => {

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10
    })

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination,
        },
    });

    if (!data || data.length === 0) {
        return <div>No hay datos disponibles</div>;
    }

    const renderHeaders = () => {
        return table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}
                className="bg-gray-600">
                {hg.headers.map((h) => (
                    <th key={h.id}
                        className="p-2 text-left text-sm sm:text-base font-medium text-gray-300 border">
                        {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                    </th>
                ))}
            </tr>
        ))
    }

    const renderRows = () => {
        return table.getRowModel().rows.map(row => (
            <tr key={row.id}
                className="border-b">
                {row.getVisibleCells().map(cell => (
                    <td key={cell.id}
                        className="p-2 text-sm sm:text-base ">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                ))}
            </tr>
        ));
    };

    const renderPagination = () => {
        return (
            <nav className="flex justify-center gap-1 sm:gap-5 mt-2 rounded-full w-full">
                <button
                    className="table-nav-button"
                    disabled={!table.getCanPreviousPage()}
                    onClick={() => table.setPageIndex(0)}
                    >
                    {'<<'}
                </button>
                <button
                    className="table-nav-button"
                    disabled={!table.getCanPreviousPage()}
                    onClick={() => table.previousPage()}>
                    {'<'}
                </button>
                <span>
                    {table.getState().pagination.pageIndex+1} / {table.getPageCount()} 
                </span>
                <select
                    className="cursor-pointer border rounded-2xl px-3"
                    value={table.getState().pagination.pageSize}
                    onChange={e => {table.setPageSize(Number(e.target.value))}}
                    >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option 
                            className="bg-gray-600 cursor-pointer"
                            key={pageSize}
                            value={pageSize}
                            >
                            Mostrar {pageSize}
                        </option>
                    ))}
                </select>
                <button
                    className="table-nav-button"
                    disabled={!table.getCanNextPage()}
                    onClick={() => table.nextPage()}>
                    {'>'}
                </button>
                <button
                    className="table-nav-button"
                    disabled={!table.getCanNextPage()}
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                    {'>>'}
                </button>
            </nav>
        );
    };

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-2">Empleados</h2>
            <table className="w-full border-collapse border border-gray-300 bg-gray-800">
                <thead>
                    {renderHeaders()}
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
            {renderPagination()}
        </div>
    );
};