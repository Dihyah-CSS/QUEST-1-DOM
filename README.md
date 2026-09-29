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