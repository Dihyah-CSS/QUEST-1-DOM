const gambarCover = document.querySelector('.cover-buku');
const tombolPinjam = document.querySelector('#btn-pinjam');
const kartuBuku = document.querySelector('.card-buku');

// Manipulasi Atribut: Mengganti gambar cover buku secara dinamis ketika data buku di-load
gambarCover.setAttribute('src', 'assets/cover-baru.png');

// Mematikan (disable) tombol pinjam jika stok buku kosong
tombolPinjam.setAttribute('disabled', 'true');

// Manipulasi Style (Inline): Menyembunyikan buku dari daftar jika tidak sesuai dengan hasil pencarian
kartuBuku.style.display = 'none';

// Manipulasi Style (ClassList): Menambahkan atau menghapus class CSS saat user me-klik tombol toggle favorit
kartuBuku.classList.toggle('is-favorit');