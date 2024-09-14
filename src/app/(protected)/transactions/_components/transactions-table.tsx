"use client";

import { Typography } from "@/components/typography/typography";
import { typographyPresets } from "@/components/typography/typographyVariants";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/format-currency";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { type Transaction, transactionsData } from "../data";

function TransactionTable() {
  // Columns for the table
  const columns = useMemo<ColumnDef<Transaction>[]>(
    () => [
      {
        accessorKey: "avatar",
        header: "Recipient / Sender",
        cell: ({ row }) => (
          <div className="flex items-center space-x-4">
            <Image
              src={`${row.original.avatar}`}
              alt={row.original.name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <Typography variant="preset4_bold">{row.original.name}</Typography>
          </div>
        ),
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: ({ getValue }) => (
          <Typography variant="preset5" className="text-grey-500 font-normal">
            {getValue<string>()}
          </Typography>
        ),
      },
      {
        accessorKey: "date",
        header: "Transaction Date",
        cell: ({ getValue }) => (
          <Typography variant="preset5" className="text-grey-500 font-normal">
            {new Date(getValue<string>()).toLocaleDateString(undefined, {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Typography>
        ),
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ getValue }) => {
          const amount = getValue<number>();
          const colourClass = amount > 0 ? "text-green" : "text-red";
          return (
            <Typography variant="preset4_bold">
              <span className={colourClass}>
                {amount > 0 && "+"} {formatCurrency(amount)}
              </span>
            </Typography>
          );
        },
      },
    ],
    []
  );

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // Sliced data for current page
  const paginatedData = useMemo(
    () =>
      transactionsData.slice(
        pagination.pageIndex * pagination.pageSize,
        (pagination.pageIndex + 1) * pagination.pageSize
      ),
    [pagination.pageIndex, pagination.pageSize]
  );

  const table = useReactTable({
    data: paginatedData, // use sliced data
    columns,
    pageCount: Math.ceil(transactionsData.length / pagination.pageSize),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, // We are manually paginating
  });

  return (
    <div>
      <table className="min-w-full table-auto mt-6">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="text-left">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={`${typographyPresets.preset5} text-grey-500 font-normal px-4 py-3 border-b`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-4 px-6">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 bg-white border rounded-[12px] text-grey-500 hover:bg-white"
        >
          <ChevronLeft className="size-4 mr-2" />
          Prev
        </Button>
        <div className="flex space-x-2">
          {[...Array(table.getPageCount()).keys()].map((pageIndex) => (
            <Button
              key={pageIndex}
              onClick={() => table.setPageIndex(pageIndex)}
              className={`px-4 py-3 rounded-[8px] hover:bg-grey-900 border hover:text-white ${
                table.getState().pagination.pageIndex === pageIndex
                  ? "bg-grey-900 text-white"
                  : "bg-white border text-grey-900"
              }`}
            >
              {pageIndex + 1}
            </Button>
          ))}
        </div>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-4 py-2 bg-white border rounded-[12px] text-grey-500 hover:bg-white"
        >
          Next
          <ChevronRight className="size-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}

export default TransactionTable;
