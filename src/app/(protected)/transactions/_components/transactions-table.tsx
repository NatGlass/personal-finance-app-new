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
import { useMediaQuery } from "@uidotdev/usehooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { type Transaction, transactionsData } from "./data";
import TransactionsHeader from "./transactions-header";

function TransactionTable() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [filter, setFilter] = useState("all");

  const isSmallDevice = useMediaQuery("only screen and (max-width:768px)");

  const filteredAndSortedData = useMemo(() => {
    let filteredData = transactionsData;

    // Apply search
    if (search) {
      filteredData = filteredData.filter((transaction) =>
        transaction.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (filter !== "all") {
      filteredData = filteredData.filter(
        (transaction) =>
          transaction.category.toLowerCase() === filter.toLowerCase() // Ensure filter matches category
      );
    }

    // Apply sorting
    if (sort === "latest") {
      filteredData = filteredData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() // Convert to timestamps for comparison
      );
    } else if (sort === "oldest") {
      filteredData = filteredData.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else if (sort === "atoz") {
      filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "ztoa") {
      filteredData = filteredData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sort === "highest") {
      filteredData = filteredData.sort((a, b) => a.amount - b.amount); // Compare amounts
    } else if (sort === "lowest") {
      filteredData = filteredData.sort((a, b) => b.amount - a.amount);
    }

    return filteredData;
  }, [search, sort, filter]);

  const columns = useMemo<ColumnDef<Transaction>[]>(() => {
    const baseColumns: ColumnDef<Transaction>[] = [
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
    ];

    // Add category and date columns only on larger screens
    if (!isSmallDevice) {
      baseColumns.push(
        {
          accessorKey: "category",
          header: "Category",
          cell: ({ getValue }) => (
            <Typography
              variant="preset5"
              className="text-grey-500 font-normal hidden md:block"
            >
              {getValue<string>()}
            </Typography>
          ),
        },
        {
          accessorKey: "date",
          header: "Transaction Date",
          cell: ({ getValue }) => (
            <Typography
              variant="preset5"
              className="text-grey-500 font-normal hidden md:block"
            >
              {new Date(getValue<string>()).toLocaleDateString(undefined, {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </Typography>
          ),
        }
      );
    }

    return baseColumns;
  }, [isSmallDevice]);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const paginatedData = useMemo(() => {
    return filteredAndSortedData.slice(
      pagination.pageIndex * pagination.pageSize,
      (pagination.pageIndex + 1) * pagination.pageSize
    );
  }, [filteredAndSortedData, pagination.pageIndex, pagination.pageSize]);

  const table = useReactTable({
    data: paginatedData,
    columns,
    pageCount: Math.ceil(filteredAndSortedData.length / pagination.pageSize),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  return (
    <div>
      <TransactionsHeader
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        filter={filter}
        setFilter={setFilter}
      />
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

