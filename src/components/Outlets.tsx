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
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-6 w-6 mr-3 flex-shrink-0 text-artea-green" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
    </svg>
);

const LocationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-6 w-6 mr-3 flex-shrink-0 text-artea-green" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
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
                    <span className="flex-1">{outlet.address}</span>
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