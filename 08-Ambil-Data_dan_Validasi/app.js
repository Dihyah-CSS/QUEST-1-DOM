document.querySelector('#btn-simpan').addEventListener('click', function() {
    // Ambil Data (.value)
    const judul = document.querySelector('#input-judul').value;

    // Validasi
    if (judul === "") {
        alert("Judul buku tidak boleh kosong, woy!");
    } else {
        console.log("Buku siap disimpan: " + judul);
    }
});