const ul = document.querySelector('#daftar-buku');

// 1. MEMBUAT Elemen Baru (Create)
const liBaru = document.createElement('li');
liBaru.textContent = "Buku Baru Banget";
ul.appendChild(liBaru); // Memasukkan <li> ke dalam <ul>

// 2. MENGHAPUS Elemen (Remove)
const bukuLama = document.querySelector('#buku-lama');
bukuLama.remove(); // Menghapus buku lama dari HTML