import React, { useState } from 'react';
import SectionHeader from './SectionHeader';

const ChevronDownIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-2 transition-transform duration-300 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const LeafIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.61,4.22C16.36,3.43,14.8,3,13,3A9,9,0,0,0,4,12H4a9,9,0,0,0,9,9c2.39,0,4.59-.93,6.14-2.52A5.36,5.36,0,0,1,17,14.87a5.5,5.5,0,0,1,5.5-5.5A5.73,5.73,0,0,1,22,9.62,8.81,8.81,0,0,0,17.61,4.22Z" />
    </svg>
);


const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 bg-artea-light-green/40 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative inline-block mb-12 text-center w-full">
            <LeafIcon className="absolute -top-8 -left-1/2 md:left-1/3 transform -translate-x-1/2 text-artea-green/10 w-48 h-48 z-0" />
            <div className="relative z-10">
                <SectionHeader title="Tentang Artea" subtitle="Kisah di Balik Kesegaran" />
            </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
                <div className="md:w-2/5 w-full">
                    <div className="bg-white p-2 rounded-lg shadow-2xl transform md:-rotate-3 transition hover:rotate-0 hover:scale-105 duration-300">
                        <img
                        src="/images/about-us.jpg"
                        alt="Artea Cafe Interior"
                        className="rounded-md w-full h-auto object-cover"
                        />
                    </div>
                </div>
                <div className="md:w-3/5 text-artea-dark space-y-4">
                    <h3 className="text-3xl font-bold text-artea-dark leading-tight">
                        Kebahagiaan dalam Setiap Cangkir.
                    </h3>
                    <p className="text-xl text-gray-700">
                        <strong>Artea</strong> lahir dari kecintaan kami terhadap teh dan kopi. Kami percaya bahwa setiap cangkir memiliki cerita dan setiap tegukan dapat membawa kebahagiaan.
                    </p>
                    <p className="text-gray-600">
                        Dimulai dari sebuah kedai kecil, kami bermimpi untuk menyajikan minuman terbaik yang dibuat dari daun teh pilihan, biji kopi segar, dan bahan-bahan alami lainnya untuk menciptakan ruang yang nyaman bagi siapa saja.
                    </p>
                     <div className="pt-4">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            aria-expanded={isExpanded}
                            className="border-2 border-artea-green text-artea-green font-bold py-3 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-artea-green hover:text-white hover:shadow-lg transform hover:scale-105"
                        >
                            {isExpanded ? 'Tutup Cerita' : 'Baca Kisah Kami'}
                            <ChevronDownIcon className={isExpanded ? 'rotate-180' : ''} />
                        </button>
                    </div>
                </div>
            </div>

            <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100 pt-12' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white p-8 lg:p-12 rounded-lg shadow-xl mt-8 space-y-4 text-gray-700 border border-gray-200">
                    <h4 className="text-2xl font-bold text-artea-dark text-center mb-4">Perjalanan Kami</h4>
                    <p>
                        Awal kami memulai usaha minuman (tahun 2024), kami tidak memulai sebagai Artea melainkan kami bergabung dengan salah satu franchise yang saat itu sedang naik daun yaitu Es Teh Desa. Sayangnya saat bergabung dengan franchise tersebut kami tidak mempelajarinya dengan baik terlebih dahulu baik target pasar, pesaing, dan aturan yang ditetapkan pihak franchise.
                    </p>
                    <p>
                        Salah satu yang membuat kami tertarik bergabung dengan franchise Es Teh Desa pada waktu itu adalah harga es teh yang sangat murah di kantong konsumen yaitu Rp 2.500, itu yang terjadi di lapangan, yang terjadi di wilayah kami, yang ditawarkan oleh mereka yang sudah berdagang terlebih dahulu dengan nama Es Teh Desa. Namun, setelah kami bergabung dengan Es Teh Desa kami merasa ada yang janggal dengan apa yang ditawarkan oleh orang yang kami anggap mitra Es Teh Desa. Misalnya, pertama cups yang mereka gunakan polos padahal cups dari pihak Es Teh Desa memiliki sablon. Kedua, kenapa rasa tehnya berbeda dengan teh racik dari Es Teh Desa di mana rasa teh dari Es Teh Desa menggunakan racikan khas solo sedangkan mereka yang kami anggap mitra sebellum kami tidak menggunakan racikan khas solo atau mungkin palah menggunakan teh instan. Ketiga, serbuk minuman varian rasa dari Es Teh Desa menggunakan bungkus alumunium voil yang beratnya kurang lebih sekitar 30 - 40 gr sedangkan mereka yang kami anggap mitra sebelum kami menggunakan plastik cetik dan beratnya mungkin lebih sedikit dari pada milik Es Teh Desa (karena kami mencoba mempraktekan dengan ukuran plastik cetik yang sama).
                    </p>
                    <p>
                        Dari sinilah kami mengambil kesimpulan bahwa orang yang kami anggap mitra Es Teh Desa sebelum kami ini melakukan kecurangan dengan melanggar kesepakatan dengan pihak Es Teh Desa. Tentu hal ini bukan tanpa sebab sepertinya karena di wilayah kami ada Booth Teh Desa yang memang menjual es teh jumbo dengan harga Rp 2.500. Perlu diketahui bahwa Teh Desa dan Es Teh Desa itu berbeda, Teh Desa itu dari Purwokerto sedangkan Es Teh Desa itu dari Solo. Tentu sebagian orang menjadikan Teh Desa kiblat Es Teh Jumbo karena Teh Desa yang pertama kali muncul di wilayah kami dan menjadikan orang yang tadinya bergabung dengan Es Teh Desa juga putar haluan agar bisa bersaing namun dengan cara yang kami anggap cara itu salah karena melanggar kesepakatan (baca: perjanjian) adalah hal yang dilarang dalam agama kami (Islam) itu termasuk tanda orang munafik sebagai mana dalam hadits:
                    </p>

                    <div className="my-4 space-y-2">
                         <p className="text-right text-lg font-serif" dir="rtl">آيَةُ الْمُنَافِقِ ثَلَاثٌ إِذَا حَدَّثَ كَذَبَ وَإِذَا وَعَدَ أَخْلَفَ وَإِذَا ائْتُمِنَ خَانَ</p>
                        <blockquote className="border-l-4 border-artea-green pl-4 italic text-gray-600">
                        “Tanda kemunafikan ada tiga; apabila bercerita ia dusta, apabila berjanji ia tidak menepatinya dan apabila diberi amanah ia berkhianat.” (Hadits Abu Hurairah radhiyallâhu ‘anhu riwayat Al-Bukhâry no. 33, 2682, 2749, 6095, Muslim no 59 dan At-Tirmidzy no. 2636.)
                        </blockquote>
                    </div>
                    
                    <p>
                        dan tempat orang munafik adalah di neraka paling bawah sebagaimana firman Allah ta'ala dalam Surat An-Nisa ayat 145:
                    </p>

                    <div className="my-4 space-y-2">
                        <p className="text-right text-lg font-serif" dir="rtl">اِنَّ الْمُنٰفِقِيْنَ فِى الدَّرْكِ الْاَسْفَلِ مِنَ النَّارِ وَلَنْ تَجِدَ لَهُمْ نَصِيْرًا</p>
                        <blockquote className="border-l-4 border-artea-green pl-4 italic text-gray-600">
                        "Sungguh, orang-orang munafik itu (ditempatkan) pada tingkatan yang paling bawah dari neraka. Dan kamu tidak akan mendapat seorang penolong pun bagi mereka."
                        </blockquote>
                    </div>

                    <p className="font-semibold">Wal 'iyyadzu billah.</p>

                    <p>
                        Tentu kami tidak ingin jatuh pada kesalahan ini dan inilah awal lahirnya Artea. Kami menjalankan usaha sebagai mitra Es Teh Desa tidak lebih dari satu atau dua pekan. Selama masa tersebut kami sembari merancang usaha kami mulai dari nama, logo, produk, dan desain yang akan kami gunakan.
                    </p>
                    <p>
                        Alhamdulillah, Allah ta'ala beri kami kemudahan. Sekitar satu pekan setelah Idul Fitri 1445 H kami bisa memulai membuka usaha kami sendiri, Artea. Inilah langkah baru kami. Semoga Allah jaga usaha ini dari keburukan dan dijadikan-Nya usaha ini usaha yang berkah bukan hanya untuk kami tapi juga Anda.
                    </p>
                    <p className="font-semibold">Barakallahu fiikum.</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;
