import Link from "next/link";
import React from "react";

export default function Card() {
  return (
    <Link href="/Blog/1">
      <div className=" h-96 lg:h-[480px] w-full overflow-hidden rounded-xl relative cursor-pointer group">
        <img
          src="https://cnc-magazine.oramiland.com/parenting/images/8e2f161cb74d3d49b904c7b99fc8386d_.width-800.format-webp.webp"
          className="w-full h-full object-cover"
          alt="Kegiatan Posyandu Balita"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent group-hover:from-primary group-hover:via-primary/60 group-hover:to-primary/30 transition-colors duration-500">
          <div className="absolute bottom-8 left-6 right-6">
            <h1 className="text-blue-300 text-xs font-medium mb-1">BERITA</h1>
            <h2 className="text-white text-base lg:text-lg font-medium">
              Kegiatan Posyandu Balita di Dusun Kertagraha
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
