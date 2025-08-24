"use client";
import React from "react";
import Card from "../../Components/Card";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";

export default function Wisata() {
  const wisataData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500",
      category: "PANTAI",
      title: "Pantai Ketewel yang Menawan",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      category: "BUDAYA",
      title: "Pura Tradisional Ketewel",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500",
      category: "KULINER",
      title: "Kuliner Tradisional Bali",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500",
      category: "ALAM",
      title: "Pemandangan Sawah Terasering",
    },
  ];

  const scrollCarousel = (direction) => {
    const carousel = document.getElementById("carousel");
    carousel.scrollBy({ left: direction * 400, behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl text-primary font-medium mb-1">
              Beragam Kawasan Wisata
            </h2>
            <p className="text-gray-600">
              Setiap Sudut, Punya Cerita — Temukan keindahan dan kearifan lokal
              Desa Ketewel dalam perjalanan yang tak terlupakan.
            </p>
          </div>

          <div className="lg:flex gap-2 hidden">
            <button
              onClick={() => scrollCarousel(-1)}
              className="p-3 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scrollCarousel(1)}
              className="p-3 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          id="carousel"
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {wisataData.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[560px]">
              <Card {...item} />
            </div>
          ))}
        </div>
        <div className="text-center lg:text-end mt-6">
          <button className="text-primary">
            Lihat Semua <MoveRight className="size-4 ml-1 inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
}
