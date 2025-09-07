import React from "react";
import Table from "../Components/Table";

export default function page() {
  const data = [
    {
      nama: "Pembangunan Jalan Desa Utara",
      lokasi: "Banjar Kelod",
      status: "Dalam Progress",
      anggaran: "Rp 200.000.000",
      keterangan:
        "Pembangunan jalan sepanjang 2 km untuk akses transportasi warga",
      action: "Lihat Detail",
    },
    {
      nama: "Renovasi Balai Desa",
      lokasi: "Pusat Desa",
      status: "Selesai",
      anggaran: "Rp 150.000.000",
      keterangan:
        "Renovasi balai desa untuk meningkatkan pelayanan masyarakat",
      action: "Lihat Detail",
    },
    {
      nama: "Pembangunan Posyandu",
      lokasi: "Banjar Kaja",
      status: "Perencanaan",
      anggaran: "Rp 75.000.000",
      keterangan:
        "Pembangunan posyandu baru untuk kesehatan ibu dan anak",
      action: "Lihat Detail",
    },
  ];

  const columns = [
    { header: "Nama Proyek", key: "nama" },
    { header: "Lokasi", key: "lokasi" },
    { header: "Status", key: "status" },
    { header: "Anggaran", key: "anggaran" },
    { header: "Keterangan", key: "keterangan" },
    { header: "Action", key: "action" },
  ];

  return (
    <Table
      title="Pembangunan Desa"
      subtitle="Proyek · 18 Data · Infrastruktur Desa"
      searchPlaceholder="Cari proyek pembangunan..."
      data={data}
      columns={columns}
    />
  );
}
