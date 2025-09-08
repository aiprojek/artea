import type { MenuCategory } from './types';

// CATATAN UNTUK ANDA:
// Path gambar di bawah ini sudah diatur untuk folder `/images/`.
// Pastikan nama file gambar yang Anda unggah ke folder `/images/` sesuai dengan yang tertulis di sini.
// Contoh: untuk "Teh Series", siapkan gambar bernama `menu-teh-series.jpg`.
// Saya telah menambahkan kategori baru "Teh Original", jadi Anda perlu menyiapkan gambar `menu-teh-original.jpg`.

export const MENU_DATA: MenuCategory[] = [
  {
    name: 'Teh Original',
    description: 'Racikan teh klasik dengan aroma dan rasa otentik.',
    image: '/images/menu-teh-original.jpg',
    items: [
      { name: 'Tawar' },
      { name: 'Reguler', isBestSeller: true },
      { name: 'Premium', isBestSeller: true },
      { name: 'Sultan' },
      { name: 'Super Jumbo' },
    ],
  },
  {
    name: 'Teh Buah',
    description: 'Kesegaran teh dengan sentuhan rasa buah.',
    image: '/images/menu-teh-buah.jpg',
    items: [
      { name: 'Teh Lemon', isBestSeller: true },
      { name: 'Teh Leci', isBestSeller: true },
      { name: 'Teh Markisa' },
      { name: 'Teh Strawberry' },
      { name: 'Teh Kiwi' },
    ],
  },
  {
    name: 'Teh Series',
    description: 'Koleksi teh dari teh susu klasik hingga racikan teh yang unik.',
    image: '/images/menu-teh-series.jpg',
    items: [
      { name: 'Milk Tea', isBestSeller: true },
      { name: 'Green Tea' },
      { name: 'Green Tea Milk', isBestSeller: true },
      { name: 'Thai Tea' },
      { name: 'Matcha' },
    ],
  },
  {
    name: 'Kopi Series',
    description: 'Dari kopi pahit hingga sajian kopi kekinian untuk para pecinta kopi.',
    image: '/images/menu-kopi-series.jpg',
    items: [
      { name: 'Kopi Pahit' },
      { name: 'Kopi Manis', isBestSeller: true },
      { name: 'Kopi Spesial Mix', isBestSeller: true },
      { name: 'Hazelnut' },
      { name: 'Brown Sugar' },
      { name: 'Tiramisu' },
      { name: 'Vanilla' },
      { name: 'Cappucino' },
    ],
  },
  {
    name: 'Creamy Series',
    description: 'Manjakan lidah dengan minuman yang kaya rasa dan lembut dimulut.',
    image: '/images/menu-creamy-series.jpg',
    items: [
      { name: 'Taro', isBestSeller: true },
      { name: 'Strawberry', isBestSeller: true },
      { name: 'Red Velvet' },
      { name: 'Mangga' },
    ],
  },
  {
    name: 'Mojito Series',
    description: 'Ledakan kesegaran dari soda dengan, garnis jeruk dengan berbagai rasa varian buah.',
    image: '/images/menu-mojito-series.jpg',
    items: [
      { name: 'Mojito Jeruk' },
      { name: 'Mojito Markisa', isBestSeller: true  },
      { name: 'Mojito Mangga' },
      { name: 'Mojito Kiwi' },
      { name: 'Mojito Blue Ocean', isBestSeller: true  },
    ],
  },
];
