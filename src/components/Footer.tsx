import React from 'react';

const Footer: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);

        if (targetId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerOffset = 80; // Sticky header's height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
    };

    const navLinks = [
      { name: 'Tentang', href: '#about' },
      { name: 'Menu', href: '#menu' },
      { name: 'Outlet', href: '#outlets' },
      { name: 'Kontak', href: '#contact' },
    ];

    return (
        <footer className="bg-artea-dark text-artea-cream">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-3xl font-bold text-artea-light-green mb-4 inline-block cursor-pointer">
                        Artea
                    </a>
                    <div className="flex justify-center space-x-6 mb-4">
                        {navLinks.map((link) => (
                             <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="hover:text-white cursor-pointer">{link.name}</a>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        &copy; {new Date().getFullYear()} Artea. All Rights Reserved.
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        Website oleh <a href="https://aiprojek01.my.id" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors duration-200">AI Projek</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;