const form = document.querySelector('#form-tambah');
const inputCari = document.querySelector('#cari-buku');

// Event 'submit' pada form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah web mereload
    console.log("Form dikirim!");
});

// Event 'input' saat ngetik (untuk fitur pencarian)
inputCari.addEventListener('input', function(event) {
    console.log("Huruf yang diketik: " + event.target.value);
});