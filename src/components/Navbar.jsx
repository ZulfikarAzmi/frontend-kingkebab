import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar fixed w-full transition-all shadow z-50">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between py-4">
          {/* Logo */}
          <div className="navbar-logo">
            <h1 className="text-2xl font-bold">RajaKebab</h1>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-8">
            <li><Link to="/" className="font-medium opacity-75 hover:opacity-100">Beranda</Link></li>
            <li><Link to="/tentang" className="font-medium opacity-75 hover:opacity-100">Tentang Kami</Link></li>
            <li><Link to="/produk" className="font-medium opacity-75 hover:opacity-100">Daftar Produk</Link></li>
            <li><Link to="/promo" className="font-medium opacity-75 hover:opacity-100">Promo</Link></li>
          </ul>

          {/* Login Desktop */}
          <div className="hidden md:block">
            <Link to="/login" className="font-medium hover:underline">Login</Link>
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
            <Link to="/" className="font-medium opacity-75 hover:opacity-100">Beranda</Link>
            <Link to="/tentang" className="font-medium opacity-75 hover:opacity-100">Tentang Kami</Link>
            <Link to="/produk" className="font-medium opacity-75 hover:opacity-100">Daftar Produk</Link>
            <Link to="/promo" className="font-medium opacity-75 hover:opacity-100">Promo</Link>
            <Link to="/login" className="font-medium hover:underline">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
