"use client";

import { Search } from "lucide-react";

export default function Table({
  title = "Data",
  subtitle = "Data · 0 Items",
  searchPlaceholder = "Cari...",
  data = [],
  columns = [],
}) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 lg:px-10 mt-28 lg:mt-38">
        <h1 className="text-center font-medium text-2xl lg:text-3xl text-primary">
          {title}
        </h1>
        <p className="text-center lg:text-base text-sm text-gray-500 mt-2">
          {subtitle}
        </p>
        <div className="mt-10">
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="input w-full border-gray-200 focus-within:shadow-none focus-within:outline-none"
          />
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="table w-full border border-gray-200">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 border-r border-gray-200 text-left text-xs font-medium text-primary uppercase tracking-wider border-b"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-6 py-4 border-r border-gray-200 text-sm ${
                        column.key === "action"
                          ? "text-primary underline whitespace-nowrap font-medium"
                          : column.key === "deskripsi" ||
                            column.key === "keterangan"
                          ? "text-gray-500 max-w-[500px]"
                          : colIndex === 0
                          ? "whitespace-nowrap font-medium text-gray-900"
                          : "whitespace-nowrap text-gray-500"
                      }`}
                    >
                      {column.key === "action" ? (
                        <a href="#">{row[column.key]}</a>
                      ) : column.key === "deskripsi" ||
                        column.key === "keterangan" ? (
                        <div className="truncate" title={row[column.key]}>
                          {row[column.key]}
                        </div>
                      ) : (
                        row[column.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
