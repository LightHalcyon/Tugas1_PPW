# Tugas 1 PPW: Company Profle

## Cara mengakses

- Masukkan folder Tugas1_PPW kedalam folder htdocs di XAMPP
- Nyalakan XAMPP Control Panel, pastikan service Apache dan MySql jalan
- Nyalakan web browser dan masukkan address http://localhost/tugas1_ppw

## Struktur folder

|--- tugas1_ppw/					( HTML disimpan disini )
    |--- src/
        |--- xml/				    ( XML disimpan disini )
        |--- js/				    ( Javascript disimpan disini )
        |--- json/				    ( Json disimpan disini )
        |--- css/				    ( CSS disimpan disini )
        |--- images		            ( Image disimpan disini )

## Deskripsi Halaman

### Halaman 1: Home

Disini terdapat deskripsi singkat lab di bar kanan dimana terdapat link menuju profil perusahaan di judul deskripsi singkat

### Halaman 2: Profile

Disini terdapat deskripsi lengkap lab beserta para staff di lab tersebut. List staff tersimpan di file profile.xml yang berisi dari nama, email, dan id staff

### Halaman 3: Project

Disini terdapat list proyek yang sedang dikerjakan. List proyek terdapat didalam file project.json yang berisi judul, deskripsi, bulan dan tahun mulai proyek beserta id para staff yang nama staff tersebut akan diambil berdasarkan id

### Halaman 4: Events

Disini terdapat list event yang akan diadakan. List ini terdiri dari nama event, tempat dilaksanakan, tanggal event, dan pembicara. List disimpan dalam event.json yang memuat semua hal tadi beserta directory gambar yang sesuai (yang juga ditampilkan di halaman 1)

### Halaman 5: Comments

Disini pengunjung dapat mengirim komentar dengan mengisi username, email, dan pesan yang ingin disampaikan. Nantinya seluruh pesan ditampilkan dibawah form tersebut

## Sumber template:

https://www.w3schools.com/bootstrap/bootstrap_templates.asp

## Sumber gambar:

http://www.mdc.edu/gamedevelopment/

http://mindofkhan.com/getting-started-video-game-development/

https://officialandreascy.blogspot.co.id/2012/07/hp-z-workstations-and-eidos-montreal.html