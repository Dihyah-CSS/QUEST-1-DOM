# QUEST-1-DOM

<h1>1. querySelector dan querySelectorAll</h1><br>
<h2>Pengertian :</h2><br>
Metode bawaan JavaScript untuk mencari dan memilih elemen HTML di dalam DOM menggunakan aturan penulisan CSS selector (class, #id,nama tag).   
<h2>Cara Kerja :</h2><br>
querySelector : Akan menelusuri DOM dan mengembalikan satu elemen pertama yang cocok dengan selector. Jika tidak ada, mengembalikan null.
querySelectorAll : Akan menelusuri DOM dan mengembalikan semua elemen yang cocok dalam bentuk NodeList (mirip array yang bisa di-looping).  

<h1>2. innerHTML, textContent, innerText</h1><br>   
<h2>Pengertian :</h2><br> 
Properti DOM yang digunakan untuk mengambil atau memanipulasi isi konten di dalam sebuah elemen HTML.
<h2>Cara Kerja :</h2><br>
innerHTML : Mengambil atau mengubah konten beserta struktur tag HTML-nya. String HTML akan langsung dirender oleh browser.
textContent : Mengambil hanya teks murni dari elemen dan seluruh elemen turunannya, termasuk teks yang secara visual disembunyikan oleh CSS.
innerText : Mengambil teks murni yang hanya terlihat di layar (memperhatikan layout CSS, sehingga elemen tersembunyi tidak ikut terbaca). 

<h1>3. Manipulasi Atribut dan Style</h1><br>  
<h2>Pengertian :</h2><br>
Teknik DOM untuk membaca, menambah, atau memodifikasi atribut elemen (seperti src, href, disabled) serta mengubah tampilan visual komponen (menggunakan properti style bawaan atau mengelola class CSS).
<h2>Cara Kerja :</h2><br>
Atribut : Menggunakan setAttribute('nama', 'nilai') untuk menambahkan/mengubah, getAttribute('nama') untuk membaca, dan removeAttribute('nama') untuk menghapus atribut tag.   
Style : Mengubah properti visual secara langsung lewat inline style (elemen.style.properti) atau menggunakan elemen.classList (add, remove, toggle) untuk memasang/mencabut class CSS.

<h1>4. Membuat & Menghapus Elemen</h1><br>
<h1>Pengertian:</h2><br> 
Menambahkan elemen HTML baru ke dalam halaman web atau menghapus elemen yang sudah ada tanpa perlu mereload halaman.
<h1>Cara Kerja:</h1><br>
Gunakan document.createElement() untuk membuat elemen di memori. Lalu gunakan appendChild() atau prepend() untuk menempelkannya ke DOM. Untuk menghapus, pilih elemen tersebut lalu panggil metode remove().

<h1>5. Event Listener : click, input, submit</h1><br>
<h2>Pengertian :</h2><br>
Sebuah metode atau "pendengar" yang ditempelkan pada elemen HTML untuk mendeteksi dan merespons interaksi yang dilakukan oleh pengguna.
<h2>Cara Kerja :</h2><br>
Gunakan elemen.addEventListener('jenis_event', fungsi_callback). Event 'click' berjalan saat elemen ditekan. Event 'input' mendeteksi setiap perubahan karakter saat user mengetik di form. Event 'submit' berjalan saat form dikirimkan, biasanya dipadukan dengan e.preventDefault() untuk mencegah halaman ter-reload.

<h1>6. Event Bubbling & StopPropagation</h1><br>
<h2>Pengertian :</h2><br>
Event Bubbling adalah sifat alami DOM di mana sebuah event (seperti klik) pada elemen anak akan merambat/tembus ke elemen induknya. StopPropagation adalah perintah untuk menghentikan rambatan tersebut.
<h2>Cara Kerja :</h2><br>
Ketika elemen di dalam kotak diklik, browser juga menganggap kamu mengklik kotak tersebut. Untuk mencegah event parent ikut berjalan saat tombol di dalamnya diklik, panggil parameter e.stopPropagation() di dalam fungsi event listener pada tombol tersebut.

<h1>7. Event Delegation</h1><br>
<h2>Pengertian :</h2><br>
Teknik efisien dalam menangani event dengan cara menempatkan satu event listener pada elemen induk (parent) untuk mengelola event dari banyak elemen anak (children) di dalamnya.
<h2>Cara Kerja :</h2><br>
Daripada membuat 100 event listener untuk 100 tombol hapus di dalam sebuah list, cukup buat 1 event listener di tag <ul> pembungkusnya. Kemudian gunakan kondisi e.target untuk mendeteksi tombol spesifik mana yang sebenarnya diklik oleh pengguna.

<h1>8. Ambil data Dan Validasi</h1><br>
<h2>Pengertian :</h2><br>
Proses menarik nilai (value) dari input form pengguna dan memverifikasi kebenaran datanya sebelum diproses lebih lanjut atau disimpan.
<h2>Cara Kerja :</h2><br>
Gunakan properti elemen.value pada elemen input untuk mengambil isinya (bisa dipadukan dengan .trim() untuk menghapus spasi berlebih). Gunakan logika percabangan if/else untuk memastikan data tidak kosong, jika tidak valid, hentikan eksekusi kode dengan return.

<h1>9. DOM Traversal Parent dan Children</h1><br>
<h2>Pengertian :</h2><br>
Teknik penelusuran struktur pohon DOM untuk mencari elemen tertentu berdasarkan hubungan hierarkinya (mencari elemen Induk/Parent atau elemen Anak/Children).
<h2>Cara Kerja :</h2><br>
Untuk bergerak ke atas (mencari parent terdekat dari sebuah elemen), gunakan metode elemen.closest('.nama-class'). Setelah parent ditemukan, bergeraklah ke bawah menggunakan elemen.querySelector() pada parent tersebut untuk menemukan elemen children spesifik di dalamnya.

<h1>10. Perpus (Render Buku + Tombol Aksi)</h1><br>
<h2>Pengertian :</h2><br>
Proses akhir merakit data dari memori JavaScript (seperti Array/Object) untuk ditampilkan menjadi elemen visual HTML utuh di layar, lengkap dengan fungsionalitasnya.
<h2>Cara Kerja :</h2><br>
Kosongkan container utama dengan innerHTML = ''. Lakukan perulangan (forEach) pada array data buku. Pada setiap iterasi, buat elemen baru (createElement), masukkan struktur teks dan tombol (innerHTML), beri class/atribut, lalu tampilkan ke antarmuka (appendChild).