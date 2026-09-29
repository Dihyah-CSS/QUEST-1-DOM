const rakBuku = document.querySelector('#rak-buku');
const judulBuku = document.querySelector('.judul-item');
const tombolFavorit = document.querySelector('.btn-favorit');

// innerHTML: Digunakan untuk merender struktur card buku baru ke dalam web
rakBuku.innerHTML += `
    <div class="card-buku">
        <h3>Laskar Pelangi</h3>
        <p>Andrea Hirata</p>
    </div>
`;

// textContent: Mengambil teks judul untuk dicocokkan dengan keyword pencarian (tanpa memedulikan tag HTML di dalamnya)
const teksJudul = judulBuku.textContent; 

// innerText: Mengubah label tombol saat sebuah buku berhasil ditambahkan ke daftar favorit
tombolFavorit.innerText = "Hapus dari Favorit";