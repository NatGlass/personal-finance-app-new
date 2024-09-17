"use client";

import { Typography } from "@/components/typography/typography";
import { typographyPresets } from "@/components/typography/typographyVariants";
import { formatCurrency } from "@/utils/format-currency";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";
import { useMemo, useState } from "react";
import { type Bill, billsData } from "./data";
import BillsHeader from "./bill-header";

function TransactionTable() {
  const [search, setSearch] = useState("");

  const isSmallDevice = useMediaQuery("only screen and (max-width:768px)");

  const filteredAndSortedData = useMemo(() => {
    let filteredData = billsData;

    if (search) {
      filteredData = filteredData.filter((bill) =>
        bill.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filteredData;
  }, [search]);

  const columns = useMemo<ColumnDef<Bill>[]>(() => {
    const baseColumns: ColumnDef<Bill>[] = [
      {
        accessorKey: "avatar",
        header: "Bill Title",
        cell: ({ row }) => (
          <div className="flex items-center space-x-4">
            <Image
              src={`${row.original.avatar}`}
              alt={row.original.title}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <Typography variant="preset4_bold">{row.original.title}</Typography>
          </div>
        ),
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ getValue }) => {
          const amount = getValue<number>();
          return (
            <Typography variant="preset4_bold" className="text-right">
                {formatCurrency(amount)}
            </Typography>
          );
        },
      },
    ];

    if (!isSmallDevice) {
      baseColumns.splice(1, 0, {
        accessorKey: "date",
        header: "Transaction Date",
        cell: ({ row }) => (
          <Typography variant="preset5" className="text-grey-500 font-normal">
            {row.original.dueDate}
          </Typography>
        ),
      });
    }

    return baseColumns;
  }, [isSmallDevice]);

  const table = useReactTable({
    data: filteredAndSortedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full col-span-full lg:col-span-8 bg-white rounded-lg p-6 lg:p-8 lg:mx-4 mt-3 lg:mt-0">
      <BillsHeader search={search} setSearch={setSearch} />
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
    </div>
  );
}

export default TransactionTable;
