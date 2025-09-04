import kebabHero from "../assets/images/kebab-hero.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage pb-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="hero pt-32 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* Text Box */}
          <div className="box text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
              Rasanya Juara,
              <span className="text-orange-600 block">Pilihan Para Raja.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Kebahagiaan bisa sesederhana menikmati kebab nikmat dari Raja
              Kebab. Rasa juicy, smoky, dan creamy berpadu sempurna, bikin
              setiap momen makan jadi lebih seru.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                to="/tentang"
                className="bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition"
              >
                Tentang Kami
              </Link>
              <Link
                to="/produk"
                className="border border-orange-600 text-orange-600 px-6 py-3 rounded-full font-medium hover:bg-orange-50 transition"
              >
                Lihat Menu
              </Link>
            </div>
          </div>

          {/* Image Box */}
          <div className="box flex justify-center">
            <img
              src={kebabHero}
              alt="heroimage"
              className="w-80 md:w-[450px] drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
