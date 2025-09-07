"use client";

import { Search } from "lucide-react";

export default function Table() {
  const data = [
    {
      nama: "Inventaris Asset Desa",
      tahun: "2023",
      deskripsi: "Deskripsi tentang inventaris asset desa.",
      action: "Lihat Detail",
    },
    {
      nama: "Inventaris Asset Desa",
      tahun: "2023",
      deskripsi: "Deskripsi tentang inventaris asset desa.",
      action: "Lihat Detail",
    },
    {
      nama: "Inventaris Asset Desa",
      tahun: "2023",
      deskripsi: "Deskripsi tentang inventaris asset desa.",
      action: "Lihat Detail",
    },
    {
      nama: "Inventaris Asset Desa",
      tahun: "2023",
      deskripsi:
        "Deskripsi tentang inventaris asset desa.Deskripsi tentang inventaris asset desa.",
      action: "Lihat Detail",
    },
    {
      nama: "Inventaris Asset Desa",
      tahun: "2023",
      deskripsi: "Deskripsi tentang inventaris asset desa.",
      action: "Lihat Detail",
    },
    {
      nama: "Inventaris Asset Desa",
      tahun: "2023",
      deskripsi: "Deskripsi tentang inventaris asset desa.",
      action: "Lihat Detail",
    },
    {
      nama: "Inventaris Asset Desa",
      tahun: "2023",
      deskripsi: "Deskripsi tentang inventaris asset desa.",
      action: "Lihat Detail",
    },
  ];

  const columnData = [
    { header: "Nama" },
    { header: "Tahun" },
    { header: "Deskripsi" },
    { header: "Action" },
  ];

  return (
    <div>
      {/* <div className="mb-3 space-x-2">
        <label className="input border focus-within:border-primary focus-within:outline-none focus-within:shadow-none outline-none shadow-none">
          <Search className="size-5 text-gray-500" />
          <input type="search" required placeholder="Filter By Name" />
        </label>
        <select
          defaultValue="Tahun"
          className="select w-fit focus-within:border-primary text-gray-500 focus-within:outline-none focus-within:shadow-none outline-none shadow-none"
        >
          <option disabled={true}>Tahun</option>
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
        </select>
      </div> */}
      <table className="w-full overflow-x-auto bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columnData.map((column, index) => (
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
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200 text-sm font-medium text-gray-900">
                {row.nama}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200 text-sm text-gray-500">
                {row.tahun}
              </td>
              <td className="px-6 py-4 border-r border-gray-200 text-sm text-gray-500 max-w-[500px]">
                <div className="truncate" title={row.deskripsi}>
                  {row.deskripsi}
                </div>
              </td>
              <td className="px-6 py-4 text-primary underline whitespace-nowrap text-sm font-medium">
                <a href={row.action}>Lihat Detail</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
