import React from "react";
import Table from "../Components/Table";

export default function page() {
  const data = [
    {
      nama: "APDES",
      tahun: "2024",
      deskripsi: "-",
      action: "Lihat Detail",
    },
    {
      nama: "Laporan Akhir Masa Jawabatan Perbekel",
      tahun: "2024",
      deskripsi: "-",
      action: "Lihat Detail",
    },
    {
      nama: "Data Pelaksanaan Kegiatan",
      tahun: "2024",
      deskripsi: "-",
      action: "Lihat Detail",
    },
    {
      nama: "Rekapitulasi Desa berikut adalah contoh data ketika sangat panjang",
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
      title="Perencanaan Desa"
      subtitle="Rencana · 12 Data · Program Desa"
      searchPlaceholder="Cari rencana pembangunan..."
      data={data}
      columns={columns}
    />
  );
}
