function updateTime() {
                             var now = new Date();
                     
                             // buat objek Intl.DateTimeFormat dengan preferensi yang diinginkan
                             var options = {
                                 day: 'numeric',
                                 month: 'long',
                                 year: 'numeric',
                                 hour: 'numeric',
                                 minute: 'numeric',
                                 second: 'numeric',
                                 hour12: false,
                                 timeZoneName: 'short'
                             };
                             var formatter = new Intl.DateTimeFormat('id-ID', options);
                     
                             // format tanggal dan waktu dengan formatter
                             var formattedDateTime = formatter.format(now);
                     
                             // ganti format waktu dengan pemisah titik dua (:) seperti yang diinginkan dan hilangkan kata "pukul"
                             formattedDateTime = formattedDateTime.replace('pukul ', '').replace(/\./g, ':');
                     
                             // tampilkan tanggal dan waktu dalam format yang diinginkan
                             document.getElementById("clock").innerHTML = formattedDateTime;
                         }
                     
                         // panggil fungsi updateTime setiap detik
                         setInterval(updateTime, 1000);
