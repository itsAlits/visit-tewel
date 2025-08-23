import React from "react";

export default function Collapse() {
  const faqData = [
    {
      id: 1,
      question:
        "Bagaimana cara mengurus surat pindah domisili di Desa Ketewel?",
      answer:
        "Anda dapat mengurus surat pindah domisili dengan datang langsung ke kantor desa Ketewel dengan membawa fotokopi KTP, KK, dan surat pengantar dari banjar/dusun. Proses pengurusan biasanya selesai dalam 1–2 hari kerja.",
      isActive: true,
    },
    {
      id: 2,
      question: "Apa saja persyaratan untuk membuat surat keterangan usaha?",
      answer:
        "Persyaratan membuat surat keterangan usaha meliputi fotokopi KTP, fotokopi KK, pas foto 3x4 sebanyak 2 lembar, dan surat pernyataan bermaterai. Biaya administrasi Rp 10.000.",
      isActive: false,
    },
    {
      id: 3,
      question:
        "Bagaimana cara mendaftar sebagai anggota banjar di Desa Ketewel?",
      answer:
        "Untuk mendaftar sebagai anggota banjar, datang ke kantor banjar setempat dengan membawa fotokopi KTP dan KK. Anda akan diberikan formulir pendaftaran dan informasi mengenai kewajiban sebagai anggota banjar.",
      isActive: false,
    },
    {
      id: 4,
      question: "Siapa saja perangkat desa yang bisa dihubungi?",
      answer:
        "Untuk mendaftar sebagai anggota banjar, datang ke kantor banjar setempat dengan membawa fotokopi KTP dan KK. Anda akan diberikan formulir pendaftaran dan informasi mengenai kewajiban sebagai anggota banjar.",
      isActive: false,
    },
    {
      id: 5,
      question: "Apakah desa memiliki layanan khusus untuk ASN?",
      answer:
        "Untuk mendaftar sebagai anggota banjar, datang ke kantor banjar setempat dengan membawa fotokopi KTP dan KK. Anda akan diberikan formulir pendaftaran dan informasi mengenai kewajiban sebagai anggota banjar.",
      isActive: false,
    },
  ];

  return (
    <div className="space-y-2">
      {faqData.map((faq) => (
        <div
          key={faq.id}
          className="collapse collapse-arrow bg-base-100 border border-base-300"
        >
          <input
            type="radio"
            name="my-accordion-2"
            defaultChecked={faq.isActive}
          />
          <div className="collapse-title font-medium text-primary">
            {faq.question}
          </div>
          <div className="collapse-content text-sm text-gray-600">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
