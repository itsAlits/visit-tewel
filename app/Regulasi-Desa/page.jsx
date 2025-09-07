import React from "react";
import Table from "../Components/Table";

export default function page() {
  const data = [
    {
      nama: "Peraturan Baru",
      tanggal: "01 Jan 2025",
      nomor: "Peraturan Desa Nomor 03 Tahun 2025",
      action: "Lihat",
    },
    {
      nama: "SK PENETAPAN TIM PENGAWAS DAN EDUKASI",
      tanggal: "16 Mar 2024",
      nomor: "SK.188.4/69/2025",
      action: "Lihat",
    },
    {
      nama: "SK PEMBENTUKAN BANK SAMPAH",
      tanggal: "27 Feb 2024",
      nomor: "5/IV/2025",
      action: "Lihat",
    },
    {
      nama: "KERJASAMA PEMERINTAH DESA ADAT KETEWEL 2023",
      tanggal: "16 Dec 2023",
      nomor: "6/IV/2025",
      action: "Lihat",
    },
    {
      nama: "Peraturan Lama",
      tanggal: "16 Aug 2023",
      nomor: "4/I/2025/DKK",
      action: "Lihat",
    },
  ];

  const columns = [
    { header: "Nama Regulasi", key: "nama" },
    { header: "Tanggal", key: "tanggal" },
    { header: "Nomor", key: "nomor" },
    { header: "Action", key: "action" },
  ];

  return (
    <Table
      title="Regulasi Desa"
      subtitle="Peraturan · 8 Data · Kebijakan Desa"
      searchPlaceholder="Cari regulasi desa..."
      data={data}
      columns={columns}
    />
  );
}
