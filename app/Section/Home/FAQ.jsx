import Collapse from "@/app/Components/Collapse";

export default function FAQ() {
  return (
    <div>
      <h1 className="text-xl text-center lg:text-start lg:text-3xl text-primary font-medium">
        Pertanyaan Seputar Desa Ketewel
      </h1>
      <p className="text-gray-600 text-center lg:text-start text-sm lg:text-base mt-1 mb-6">
        Temukan jawaban atas pertanyaan umum tentang layanan desa, informasi
        kependudukan, dan fasilitas yang tersedia untuk warga.
      </p>
      <Collapse />
    </div>
  );
}
