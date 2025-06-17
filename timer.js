// Mendapatkan elemen tabel
                       var table = document.querySelector('table');
                     
                       // Mendapatkan elemen countdown pada tabel
                       var countdownElements = table.querySelectorAll('.countdown');
                     
                       // Mendapatkan hari ini dalam bentuk angka (1-7), dimulai dari Senin hingga Minggu
                       var today = new Date().getDay();
                     
                       function hitungSisaWaktuPasang(jamTutup, countdownElement, row) {
                         // Mendapatkan waktu tutup dan waktu result dari elemen "jamtutup" dan "jamresult"
                         var waktuTutup = new Date();
                         var waktuResult = new Date();
                         var waktuTutupString = waktuTutup.getFullYear() + "-" + (waktuTutup.getMonth() + 1) + "-" + waktuTutup.getDate() + " " + jamTutup + ":00";
                         var waktuResultString = waktuResult.getFullYear() + "-" + (waktuResult.getMonth() + 1) + "-" + waktuResult.getDate() + " " + row.querySelector('.jamresult').textContent + ":00";
                         waktuTutup = new Date(waktuTutupString);
                         waktuResult = new Date(waktuResultString);
                     
                         // Menghitung selisih waktu antara waktu tutup dan waktu sekarang
                         var selisihWaktu = waktuTutup - new Date();
                     
                         // Jika waktu sekarang berada di antara waktu tutup dan waktu result, ganti teks pada elemen "countdown" menjadi "Close"
                         if (selisihWaktu <= 0 && waktuResult >= new Date()) {
                           countdownElement.innerHTML = "Bet Closed";
                           countdownElement.classList.add("merah");
                           row.classList.remove("mauhabis");
                           row.classList.add("pasarantutup");
                         } else {
                           // Jika waktu tutup belum lewat, hitung selisih waktu dan tampilkan sisa waktu
                           if (selisihWaktu > 0) {
                             // Mengonversi selisih waktu ke dalam jam, menit, dan detik
                             var jam = Math.floor(selisihWaktu / (1000 * 60 * 60));
                             var menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
                             var detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);
                     
                             // Mengubah format sisa waktu menjadi "HH:MM:SS"
                             var jamStr = (jam < 10) ? "0" + jam : jam;
                             var menitStr = (menit < 10) ? "0" + menit : menit;
                             var detikStr = (detik < 10) ? "0" + detik : detik;
                     
                             // Menampilkan sisa waktu pada elemen "countdown"
                             countdownElement.innerHTML = jamStr + ":" + menitStr + ":" + detikStr;
                             // Jika sisa waktu kurang dari 15 menit dari total sisa waktu keseluruhan, tambahkan class "merah" pada elemen "countdown"
                             if (selisihWaktu <= 900000) {
                               countdownElement.classList.add("merah");
                               row.classList.add("mauhabis");
                             } else {
                               countdownElement.classList.remove("merah");
                               row.classList.remove("mauhabis");
                             }
                           } else {
                             // Jika waktu tutup sudah lewat, tampilkan pesan "Closed" pada elemen "countdown"
                             countdownElement.innerHTML = "Bet Closed";
                             row.classList.add("habis");
                             row.classList.remove("pasarantutup");
                           }
                         }
                     
                         // Jika waktu sekarang telah lewat waktu "jamresult", hitung selisih waktu antara waktu tutup dengan 24 jam kedepan
                         if (new Date() >= waktuResult) {
                           // Menambahkan 24 jam ke waktu tutup
                           waktuTutup.setDate(waktuTutup.getDate() + 1);
                           // Menghitung selisih waktu antara waktu tutup yang sudah ditambahkan dengan 24 jam dan waktu sekarang
                           selisihWaktu = waktuTutup - new Date();
                     
                           // Mengonversi selisih waktu ke dalam jam, menit, dan detik
                           var jam = Math.floor(selisihWaktu / (1000 * 60 * 60));
                           var menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
                           var detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);
                     
                           // Mengubah format sisa waktu menjadi "HH:MM:SS"
                           var jamStr = (jam < 10) ? "0" + jam : jam;
                           var menitStr = (menit < 10) ? "0" + menit : menit;
                           var detikStr = (detik < 10) ? "0" + detik : detik;
                     
                           // Menampilkan sisa waktu pada elemen "countdown"
                           countdownElement.innerHTML = jamStr + ":" + menitStr + ":" + detikStr;
                           row.classList.remove("habis");
                           row.classList.remove("pasarantutup");
                     
                           // Jika sisa waktu kurang dari 15 menit dari total sisa waktu keseluruhan, tambahkan class "merah" pada elemen "countdown"
                           if (selisihWaktu <= 900000) {
                             countdownElement.classList.add("merah");
                             row.classList.add("mauhabis");
                           } else {
                             countdownElement.classList.remove("merah");
                             row.classList.remove("mauhabis");
                           }
                         }
                       }
                     
                       // Fungsi untuk menentukan nilai countdown dan status pasaran (buka/tutup) pada setiap baris tabel
                       function hitungCountdown() {
                         countdownElements.forEach(function(countdownElement) {
                           // Mendapatkan nilai data pada elemen countdown
                           var dataSenin = countdownElement.dataset.senin;
                           var dataSelasa = countdownElement.dataset.selasa;
                           var dataRabu = countdownElement.dataset.rabu;
                           var dataKamis = countdownElement.dataset.kamis;
                           var dataJumat = countdownElement.dataset.jumat;
                           var dataSabtu = countdownElement.dataset.sabtu;
                           var dataMinggu = countdownElement.dataset.minggu;
                     
                           // Menentukan status pasaran (buka/tutup) berdasarkan nilai data pada hari ini
                           var statusPasaran = "tutup";
                           if (today === 1 && dataSenin === "1") {
                             statusPasaran = "buka";
                           } else if (today === 2 && dataSelasa === "1") {
                             statusPasaran = "buka";
                           } else if (today === 3 && dataRabu === "1") {
                             statusPasaran = "buka";
                           } else if (today === 4 && dataKamis === "1") {
                             statusPasaran = "buka";
                           } else if (today === 5 && dataJumat === "1") {
                             statusPasaran = "buka";
                           } else if (today === 6 && dataSabtu === "1") {
                             statusPasaran = "buka";
                           } else if (today === 0 && dataMinggu === "1") {
                             statusPasaran = "buka";
                           }
                     
                           // Menentukan nilai countdown pada elemen countdown
                           if (statusPasaran === "buka") {
                             // Mendapatkan elemen "jamtutup" dan "barisdepan" pada setiap baris
                             var jamTutup = countdownElement.closest('.barisdepan').querySelector('.jamtutup').textContent;
                             var row = countdownElement.closest('.barisdepan');
                     
                             // Menghitung sisa waktu pasang menggunakan fungsi "hitungSisaWaktuPasang"
                             hitungSisaWaktuPasang(jamTutup, countdownElement, row);
                     
                           } else {
                             // Jika pasaran libur, tampilkan teks "Pasaran Libur" pada elemen "countdown"
                             countdownElement.innerHTML = "Pasaran Libur";
                             // Menghapus class "merah", "mauhabis", dan "habis" pada barisdepan dan reset nilai countdown menjadi "Pasaran Libur"
                             countdownElement.classList.remove("merah");
                             countdownElement.closest('.barisdepan').classList.remove("mauhabis");
                             countdownElement.closest('.barisdepan').classList.remove("habis");
                             countdownElement.innerHTML = "Pasaran Libur";
                           }
                         });
                       }
                       // Menjalankan fungsi "hitungCountdown" setiap 1 detik
                       setInterval(hitungCountdown, 1000);
