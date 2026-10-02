// Data memori
const databaseBuku = [
    { judul: "Laskar Pelangi", penulis: "Andrea Hirata" },
    { judul: "Bumi Manusia", penulis: "Pramoedya" }
];

const ul = document.querySelector('#daftar-buku');

// Fungsi Render
function renderSemuaBuku() {
    ul.innerHTML = ''; // Kosongkan daftar sebelum di render ulang
    
    // Looping data
    databaseBuku.forEach(function(buku) {
        const li = document.createElement('li');
        li.classList.add('item-buku');
        
        // Memasukkan Teks dan Tombol Aksi
        li.innerHTML = `
            <span>${buku.judul} - ${buku.penulis}</span>
            <div>
                <button class="btn-baca">Baca</button>
                <button class="btn-hapus">Hapus</button>
            </div>
        `;
        ul.appendChild(li); // Tampilkan ke layar
    });
}

// Jalankan fungsi
renderSemuaBuku();