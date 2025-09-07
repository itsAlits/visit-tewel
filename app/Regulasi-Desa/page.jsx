import React from "react";
import Table from "../Components/Table";

export default function page() {
  const data = [
    {
      nama: "Perdes No. 01/2024",
      judul: "Tentang Pengelolaan Sampah Desa",
      tanggal: "15 Jan 2024",
      status: "Berlaku",
      deskripsi:
        "Peraturan desa tentang tata cara pengelolaan sampah dan kebersihan lingkungan",
      action: "Lihat Detail",
    },
    {
      nama: "Perdes No. 02/2024",
      judul: "Tentang Retribusi Pasar Desa",
      tanggal: "28 Feb 2024",
      status: "Berlaku",
      deskripsi:
        "Peraturan mengenai tarif dan tata cara pembayaran retribusi pasar desa",
      action: "Lihat Detail",
    },
    {
      nama: "Perdes No. 03/2024",
      judul: "Tentang Bantuan Sosial",
      tanggal: "10 Mar 2024",
      status: "Draft",
      deskripsi:
        "Peraturan tentang kriteria dan mekanisme pemberian bantuan sosial kepada masyarakat",
      action: "Lihat Detail",
    },
  ];

  const columns = [
    { header: "Nomor Perdes", key: "nama" },
    { header: "Judul", key: "judul" },
    { header: "Tanggal", key: "tanggal" },
    { header: "Status", key: "status" },
    { header: "Deskripsi", key: "deskripsi" },
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
