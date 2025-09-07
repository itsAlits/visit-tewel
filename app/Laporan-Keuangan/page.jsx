import React from "react";
import Table from "../Components/Table";

export default function page() {
  const data = [
    {
      nama: "Laporan Keuangan Q1 2024",
      tahun: "2024",
      deskripsi: "-",
      action: "Lihat Detail",
    },
    {
      nama: "Laporan Keuangan Q1 2024",
      tahun: "2024",
      deskripsi: "-",
      action: "Lihat Detail",
    },
  ];

  const columns = [
    { header: "Nama Laporan", key: "nama" },
    { header: "Tahun", key: "tahun" },
    { header: "Deskripsi", key: "deskripsi" },
    { header: "Action", key: "action" },
  ];

  return (
    <Table
      title="Laporan Keuangan"
      subtitle="Inventaris · 24 Data · Aset Desa"
      searchPlaceholder="Cari laporan keuangan..."
      data={data}
      columns={columns}
    />
  );
}
