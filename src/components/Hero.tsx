import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('menu');
    if (targetElement) {
      const headerOffset = 80; // height of the header (h-20)
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-background.jpg"
          alt="Pemandangan perkebunan teh yang subur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-artea-dark bg-opacity-50"></div>
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          Kesegaran di Setiap Tegukan
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
          Temukan minuman favoritmu di Artea, dibuat dari bahan-bahan pilihan terbaik.
        </p>
        <a
          href="#menu"
          onClick={handleScrollToMenu}
          className="bg-artea-green hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          Lihat Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
