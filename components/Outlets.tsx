import React from 'react';
import SectionHeader from './SectionHeader';

// CATATAN UNTUK ANDA:
// Path gambar di bawah ini sudah diatur untuk folder `/images/`.
// Pastikan nama file gambar yang Anda unggah ke folder `/images/` sesuai dengan yang tertulis di sini.
// Contoh: untuk outlet Sumpiuh, siapkan gambar bernama `outlet-sumpiuh.jpg`.
const outlets = [
  {
    name: 'Artea Sumpiuh',
    address: 'Jl. Pemotongan Pasar No.I, RT.04/RW.01, Barat Pasar, Sumpiuh, Kec. Sumpiuh, Kabupaten Banyumas, Jawa Tengah 53195',
    contactName: 'Abu Aya Akhrid',
    contactNumber: '6281225879494',
    image: '/images/outlet-sumpiuh.jpg',
    mapLink: 'https://maps.app.goo.gl/hJdywPBpkNksKMjL7'
  },
  {
    name: 'Artea Karangwangkal',
    address: 'Gg. Gn. Cermai No.35, RT.2/RW.2, Karangwangkal, Kec. Purwokerto Utara, Kabupaten Banyumas, Jawa Tengah 53123',
    contactName: 'Shofi',
    contactNumber: '6285727753309',
    image: '/images/outlet-karangwangkal.jpg',
    mapLink: 'https://maps.app.goo.gl/vuPKivcKBAYUHz6MA'
  }
];

const ContactIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-artea-green" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.03 11.03 0 004.28 4.28l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

const LocationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-artea-green" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const Outlets: React.FC = () => {
  return (
    <section id="outlets" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Kunjungi Outlet Kami" subtitle="Temukan Artea terdekat di kotamu" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {outlets.map((outlet, index) => (
            <div key={index} className="bg-artea-cream rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
              <img src={outlet.image} alt={outlet.name} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-artea-dark mb-2">{outlet.name}</h3>
                <p className="text-gray-700 mb-4 flex items-start">
                    <LocationIcon />
                    <span>{outlet.address}</span>
                </p>
                <a 
                  href={`https://wa.me/${outlet.contactNumber}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 inline-flex items-center hover:text-artea-green transition-colors duration-200"
                >
                    <ContactIcon />
                    <span>Kontak: {outlet.contactName}</span>
                </a>
                <div className="mt-auto pt-6">
                    <a 
                      href={outlet.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-artea-green font-semibold hover:underline"
                    >
                      Lihat di Peta &rarr;
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outlets;