import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Column {
  key: string
  label: string
}

interface ResponsiveTableProps {
  columns: Column[]
  data: any[]
}

export default function ResponsiveTable({ columns, data }: ResponsiveTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  <div className="flex flex-col sm:hidden">
                    <span className="font-bold">{column.label}</span>
                    <span>{row[column.key]}</span>
                  </div>
                  <div className="hidden sm:block">{row[column.key]}</div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

