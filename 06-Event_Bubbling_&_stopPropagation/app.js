const divPembungkus = document.querySelector('#pembungkus');
const btnHapus = document.querySelector('#btn-hapus');

divPembungkus.addEventListener('click', function() {
    console.log("Waduh, Div kuning ikut terklik!");
});

btnHapus.addEventListener('click', function(event) {
    event.stopPropagation(); // MENCEGAH event klik tembus ke div kuning
    console.log("Buku dihapus!");
});