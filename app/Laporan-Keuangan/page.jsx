import React from "react";
import Table from "../Components/Table";

export default function page() {
  const data = [
    {
      nama: "Laporan Keuangan Q1 2024",
      periode: "Jan-Mar 2024",
      jenis: "Pendapatan",
      jumlah: "Rp 125.000.000",
      action: "Lihat Detail",
    },
    {
      nama: "Laporan Pengeluaran Infrastruktur",
      periode: "Feb 2024",
      jenis: "Pengeluaran",
      jumlah: "Rp 75.000.000",
      action: "Lihat Detail",
    },
    {
      nama: "Dana Bantuan Sosial",
      periode: "Mar 2024",
      jenis: "Pendapatan",
      jumlah: "Rp 50.000.000",
      action: "Lihat Detail",
    },
  ];

  const columns = [
    { header: "Nama Laporan", key: "nama" },
    { header: "Periode", key: "periode" },
    { header: "Jenis", key: "jenis" },
    { header: "Jumlah", key: "jumlah" },
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
