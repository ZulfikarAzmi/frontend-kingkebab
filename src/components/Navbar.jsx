import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar fixed w-full transition-all shadow">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between py-4">
          {/* Logo */}
          <div className="navbar-logo">
            <h1 className="text-2xl font-bold">RajaKebab</h1>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-8">
            <li><a href="#" className="font-medium opacity-75 hover:opacity-100">Beranda</a></li>
            <li><a href="#" className="font-medium opacity-75 hover:opacity-100">Tentang Kami</a></li>
            <li><a href="#" className="font-medium opacity-75 hover:opacity-100">Daftar Produk</a></li>
            <li><a href="#" className="font-medium opacity-75 hover:opacity-100">Promo</a></li>
          </ul>

          {/* Login Desktop */}
          <div className="hidden md:block">
            <a href="#" className="font-medium hover:underline">Login</a>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            <a href="#" className="font-medium opacity-75 hover:opacity-100">Beranda</a>
            <a href="#" className="font-medium opacity-75 hover:opacity-100">Tentang Kami</a>
            <a href="#" className="font-medium opacity-75 hover:opacity-100">Daftar Produk</a>
            <a href="#" className="font-medium opacity-75 hover:opacity-100">Promo</a>
            <a href="#" className="font-medium hover:underline">Login</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
