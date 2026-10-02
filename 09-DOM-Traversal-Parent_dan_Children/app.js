document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-hapus')) {
        // MENCARI PARENT (Induk terdekat <li> dari tombol yang diklik)
        const parentLi = event.target.closest('.item-buku');

        // MENCARI CHILDREN (Anak <span> di dalam <li> tadi)
        const anakJudul = parentLi.querySelector('.judul').textContent;
        
        console.log("Kamu sedang menghapus buku: " + anakJudul);
    }
});