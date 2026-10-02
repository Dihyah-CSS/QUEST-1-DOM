// innerHTML: Memasukkan elemen HTML baru ke dalam <ul>
const daftar = document.querySelector('#daftar-buku');
daftar.innerHTML = '<li class="item-buku">Buku Baru</li>';

// textContent: Mengambil teks murni (tanpa tag HTML) dari span
const spanJudul = document.querySelector('.judul-buku');
const teks = spanJudul.textContent; // Hasilnya: "Belajar DOM"