import React, { useState } from 'react';

const MenuIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Utama', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Outlet', href: '#outlets' },
    { name: 'Kontak', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);

    if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (isOpen) setIsOpen(false);
        return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const headerOffset = 80; // height of the header (h-20)
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
    }

    if (isOpen) {
        setIsOpen(false);
    }
  };


  return (
    <header className="bg-artea-cream/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-3xl font-bold text-artea-green">
            Artea
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-artea-dark hover:text-artea-green font-semibold transition duration-300 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-artea-dark">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-artea-cream shadow-lg">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-artea-dark hover:bg-artea-light-green hover:text-artea-dark"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;