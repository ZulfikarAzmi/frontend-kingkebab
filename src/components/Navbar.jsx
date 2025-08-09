const Navbar = () => {
  return (
    <div className="navbar fixed w-full transition-all">
        <div className="container mx-auto px-4">
            <div className="navbar-box flex items-center justify-between">
                <div className="navbar-logo">
                    <h1 className="text-2xl font-bold">RajaKebab</h1>
                </div>
                <ul className="flex gap-12">
                    <li>
                        <a href="#" className="font-medium opacity-75">Beranda</a>
                    </li>
                    <li>
                        <a href="#" className="font-medium opacity-75">Tentang Kami</a>
                    </li>
                    <li>
                        <a href="#" className="font-medium opacity-75">Daftar Produk</a>
                    </li>
                    <li>
                        <a href="#" className="font-medium opacity-75">Promo</a>
                    </li>
                </ul>
                <div className="social">
                    <a href="#">Social media</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;