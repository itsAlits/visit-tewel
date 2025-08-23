import React from "react";
import Card from "./Card";
import { MoveRight } from "lucide-react";

export default function Tab() {
  return (
    <div className="mt-8">
      {/* name of each tab group should be unique */}
      <div className="tabs">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab hidden md:block checked:border-b-primary checked:text-primary text-[16px] checked:border-b"
          defaultChecked
          aria-label="Semua"
        />
        <div className="tab-content border-t border-t-base-300 bg-base-100 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="mt-8 text-center lg:text-end">
            <button className="text-primary">
              Lihat Semua <MoveRight className="inline-block size-4 ml-1" />
            </button>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab hidden md:block checked:border-b-primary hover:text-primary text-[16px] checked:border-b"
          aria-label="Berita Terbaru"
        />
        <div className="tab-content border-t border-t-base-300 bg-base-100 py-10">
          Berita Terbaru
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab hidden md:block checked:border-b-primary hover:text-primary text-[16px] checked:border-b"
          aria-label="Pengumuman"
        />
        <div className="tab-content border-t border-t-base-300 bg-base-100 py-10">
          Pengumuman
        </div>
      </div>
    </div>
  );
}
