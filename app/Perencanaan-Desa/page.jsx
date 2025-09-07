import React from "react";
import Table from "../Components/Table";

export default function page() {
  const data = [
    {
      nama: "RPJMDes 2024-2030",
      tahun: "2024-2030",
      kategori: "Jangka Menengah",
      prioritas: "Tinggi",
      deskripsi: "Rencana Pembangunan Jangka Menengah Desa untuk 6 tahun ke depan",
      action: "Lihat Detail",
    },
    {
      nama: "RKPDes 2024",
      tahun: "2024",
      kategori: "Tahunan",
      prioritas: "Tinggi",
      deskripsi: "Rencana Kerja Pemerintah Desa untuk tahun 2024",
      action: "Lihat Detail",
    },
    {
      nama: "Program Peningkatan Ekonomi",
      tahun: "2024-2025",
      kategori: "Program Khusus",
      prioritas: "Sedang",
      deskripsi: "Program untuk meningkatkan ekonomi masyarakat desa melalui UMKM",
      action: "Lihat Detail",
    },
  ];

  const columns = [
    { header: "Nama Rencana", key: "nama" },
    { header: "Tahun", key: "tahun" },
    { header: "Kategori", key: "kategori" },
    { header: "Prioritas", key: "prioritas" },
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
