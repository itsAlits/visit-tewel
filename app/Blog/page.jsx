import React from "react";

export default function page() {
  return (
    <div className="pt-32">
      <div className="container mx-auto px-6 lg:px-0 mb-20">
        <div className="mt-10 text-center border-b border-gray-300 pb-10">
          <h1 className="text-3xl font-medium text-primary">Kabar Ketewel</h1>
          <p className="font-light">24 Data Pengumuman - 21 Data Berita</p>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-medium text-primary">Berita Terbaru</h1>
          <div
            id="recentBlogs"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8"
          >
            <div>
              <div className="h-96 overflow-hidden">
                <img
                  src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*od35k49QaUkrFDbK"
                  alt="berita"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
              <h1 className="mt-4 font-light text-sm">By Admin</h1>
              <h1 className="mt-2 font-medium text-primary text-sm">BERITA</h1>
              <h2 className="font-medium text-xl">
                One Writing Change That Doubled My Engagement
              </h2>
              <p className="text-sm font-light mt-4">3 minutes ago</p>
            </div>
            <div>
              <div className="h-96 overflow-hidden">
                <img
                  src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*od35k49QaUkrFDbK"
                  alt="berita"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
              <h1 className="mt-4 font-light text-sm">By Admin</h1>
              <h1 className="mt-2 font-medium text-primary text-sm">
                PENGUMUMAN
              </h1>
              <h2 className="font-medium text-xl">
                One Writing Change That Doubled My Engagement
              </h2>
              <p className="text-sm font-light mt-4">3 minutes ago</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div
            id="blogs"
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10"
          >
            <div>
              <div className="h-96 overflow-hidden">
                <img
                  src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*od35k49QaUkrFDbK"
                  alt="berita"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
              <h1 className="mt-4 font-light text-sm">By Admin</h1>
              <h2 className="font-medium text-xl">
                One Writing Change That Doubled My Engagement
              </h2>
              <p className="text-sm font-light mt-4">3 minutes ago</p>
            </div>
            <div>
              <div className="h-96 overflow-hidden">
                <img
                  src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*od35k49QaUkrFDbK"
                  alt="berita"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
              <h1 className="mt-4 font-light text-sm">By Admin</h1>
              <h2 className="font-medium text-xl">
                One Writing Change That Doubled My Engagement
              </h2>
              <p className="text-sm font-light mt-4">3 minutes ago</p>
            </div>
            <div>
              <div className="h-96 overflow-hidden">
                <img
                  src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*od35k49QaUkrFDbK"
                  alt="berita"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
              <h1 className="mt-4 font-light text-sm">By Admin</h1>
              <h2 className="font-medium text-xl">
                One Writing Change That Doubled My Engagement
              </h2>
              <p className="text-sm font-light mt-4">3 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
