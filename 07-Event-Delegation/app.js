const ul = document.querySelector('#daftar-buku');

ul.addEventListener('click', function(event) {
    // Mengecek apakah yang diklik benar-benar elemen dengan class btn-hapus
    if (event.target.classList.contains('btn-hapus')) {
        console.log("Tombol hapus pada suatu buku ditekan!");
    }
});