import React from "react";
import Table from "../Components/Table";

export default function page() {
  const data = [
    {
      regulasi: "Pembangunan Saluran Drainase Bale banjar Desa Ketewel",
      tahun: "2025",
      alamat:
        "Jl. Gemitir Gg. Taman 2 No.8, Kesiman Kertalangu, Kec. Denpasar Tim., Kota Denpasar, Bali 80237, Indonesia",
      sumber_dana: "ADD",
      anggaran: "51.147.000",
      action: "Lihat Detail",
    },
  ];

  const columns = [
    { header: "Regulasi", key: "regulasi" },
    { header: "Tahun", key: "tahun" },
    { header: "Alamat", key: "alamat" },
    { header: "Sumber Dana", key: "sumber_dana" },
    { header: "Anggaran", key: "anggaran" },
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
