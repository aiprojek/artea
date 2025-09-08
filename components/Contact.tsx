import React, { useState } from 'react';
import SectionHeader from './SectionHeader';

// --- PENGATURAN ---
// Ganti nomor ini dengan nomor WhatsApp bisnis Anda (gunakan format kode negara tanpa '+')
const NOMOR_WHATSAPP = '6281225879494'; 
// Ubah menjadi 'true' untuk menampilkan ikon media sosial
const tampilkanMediaSosial = false; 

const InstagramIcon: React.FC<{className?: string}> = ({ className = 'h-8 w-8' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className} viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.703.01 5.556 0 5.829 0 8s.01 2.444.048 3.297c.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.556 15.99 5.829 16 8 16s2.444-.01 3.297-.048c.852-.04 1.433-.174 1.942-.372.526-.205.972-.478 1.417-.923.445-.444.719-.891.923-1.417.198-.51.333-1.09.372-1.942C15.99 10.444 16 10.171 16 8s-.01-2.444-.048-3.297c-.04-.852-.174-1.433-.372-1.942a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.09-.333-1.942-.372C10.444.01 10.171 0 8 0zm0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.486.039.843.047 1.096.047 3.232s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.389-.009-3.232-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.598-.919c-.11-.282-.24-.705-.275-1.486-.038-.843-.046-1.096-.046-3.232s.008-2.389.046-3.232c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.232-.047zM8 4.938a3.062 3.062 0 1 0 0 6.125 3.062 3.062 0 0 0 0-6.125zm0 5.063a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6.406-7.188a.938.938 0 1 0 0-1.875.938.938 0 0 0 0 1.875z"/>
    </svg>
);

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
);

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !message.trim()) {
            alert('Harap isi nama dan pesan Anda.');
            return;
        }

        const formattedMessage = `Bismillah.\n\nAssalamualaikum Warahmatullahi Wabarakatuh.\n\nHalo, Artea.\n\nNama saya *${name}*.\n\nPesan saya:\n${message}`;
        const encodedMessage = encodeURIComponent(formattedMessage);
        const whatsappUrl = `https://wa.me/${NOMOR_WHATSAPP}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="contact" className="py-20 bg-artea-cream">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Hubungi Kami" subtitle="Kami senang mendengar darimu!" />
                
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-artea-dark">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-artea-green focus:border-artea-green transition duration-200"
                                placeholder="Tulis nama Anda di sini"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-semibold text-artea-dark">
                                Pesan Anda
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-artea-green focus:border-artea-green transition duration-200"
                                placeholder="Apa yang ingin Anda sampaikan atau tanyakan?"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-artea-green text-white font-bold py-3 px-6 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-artea-green"
                                aria-label="Kirim pesan melalui WhatsApp"
                            >
                                <WhatsAppIcon />
                                Kirim via WhatsApp
                            </button>
                        </div>
                    </form>
                </div>

                {tampilkanMediaSosial && (
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">Atau ikuti kami di media sosial:</p>
                        <div className="flex justify-center space-x-6">
                            <a href="#" aria-label="Instagram Artea" className="text-artea-dark hover:text-artea-green transition-colors duration-300">
                                <InstagramIcon className="h-10 w-10" />
                            </a>
                            {/* Tambahkan ikon media sosial lain di sini jika perlu */}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;