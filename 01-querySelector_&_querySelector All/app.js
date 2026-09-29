// Memilih satu elemen: input kolom pencarian berdasarkan ID
const inputCariBuku = document.querySelector('#input-pencarian');

// Memilih banyak elemen: mengambil semua card buku di galeri untuk proses filtering
const daftarBuku = document.querySelectorAll('.card-buku');

// Contoh eksekusi
console.log(inputCariBuku.value);
daftarBuku.forEach(buku => {
    // Logika untuk menampilkan/menyembunyikan buku
});