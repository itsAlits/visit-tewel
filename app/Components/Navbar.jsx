import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    {
      title: "Tentang Desa",
      items: [
        { title: "Sejarah Desa", href: "/tentang-desa/sejarah" },
        { title: "Visi & Misi", href: "/tentang-desa/visi-misi" },
        { title: "Struktur Organisasi", href: "/tentang-desa/struktur" },
      ],
    },
    {
      title: "Keagamaan",
      items: [
        { title: "Pura", href: "/keagamaan/pura" },
        { title: "Upacara Agama", href: "/keagamaan/upacara" },
        { title: "Kalender Bali", href: "/keagamaan/kalender" },
      ],
    },
    {
      title: "Keuangan & Laporan",
      items: [
        { title: "Laporan Keuangan", href: "/keuangan-laporan/keuangan" },
        { title: "Laporan Kegiatan", href: "/keuangan-laporan/kegiatan" },
        { title: "Transparansi", href: "/keuangan-laporan/transparansi" },
      ],
    },
    {
      title: "Pariwisata",
      items: [
        { title: "Objek Wisata", href: "/pariwisata/objek-wisata" },
        { title: "Paket Wisata", href: "/pariwisata/paket" },
        { title: "Galeri", href: "/pariwisata/galeri" },
      ],
    },
    {
      title: "Layanan Informasi",
      items: [
        { title: "Berita", href: "/layanan-informasi/berita" },
        { title: "Pengumuman", href: "/layanan-informasi/pengumuman" },
        { title: "Kontak", href: "/layanan-informasi/kontak" },
      ],
    },
  ];

  return (
    <div className="drawer">
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <nav className="h-18 fixed bg-white border-b border-b-base-300 w-full z-50 flex items-center">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div>
              <Image src="/logo.svg" alt="Logo" width={48} height={48} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <ul className="flex space-x-2">
                {navItems.map((navItem, index) => (
                  <li key={index}>
                    <div className="dropdown dropdown-end dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className="text-gray-500 text-sm hover:text-primary my-3 mx-2 flex cursor-pointer items-center gap-1 transition-colors duration-200 group"
                      >
                        {navItem.title}
                        <ChevronDown className="transition-transform duration-200 size-5 group-hover:rotate-180" />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 border text-sm border-base-300"
                      >
                        {navItem.items.map((item, itemIndex) => (
                          <li className="py-0.5" key={itemIndex}>
                            <Link
                              className="text-gray-500 hover:text-primary"
                              href={item.href}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <label
                htmlFor="mobile-drawer"
                className="btn btn-square btn-ghost"
              >
                <Menu className="size-6" />
              </label>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className="drawer-side z-50">
        <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
        <aside className="min-h-full w-full bg-base-100">
          <div className="flex justify-between items-center border-b border-b-base-300 mb-2 px-3 py-4">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
            <label htmlFor="mobile-drawer" className="btn btn-square btn-ghost">
              <X className="size-6" />
            </label>
          </div>

          <ul className="space-y-1">
            {navItems.map((navItem, index) => (
              <li key={index}>
                <div className="collapse collapse-arrow">
                  <input type="checkbox" />
                  <div className="collapse-title text-sm font-medium text-gray-700">
                    {navItem.title}
                  </div>
                  <div className="collapse-content">
                    <ul className="space-y-1">
                      {navItem.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link
                            className="block py-2 text-sm text-gray-500 hover:text-primary hover:bg-gray-50 rounded"
                            href={item.href}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
