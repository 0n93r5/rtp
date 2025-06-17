// Daftar ID
            const ids = [
                "BULLSEYE", "Toto Macau13", "SYDNEY LOTTO", "Toto Macau 5D 15", "Toto Macau16", "SINGAPORE", "LOTTO GENTING19", "Toto Macau 19",
                "LOTTO GENTING20", "PCSO", "LOTTO GENTING21",  "Toto Macau 5D 21",
                "LOTTO GENTING22", "Toto Macau 22", "LOTTO GENTING23", "HONGKONG LOTTO",
                "Toto Macau 23", "LOTTO GENTING24", "Toto Macau 00"
            ];
    
            // Fungsi untuk mendapatkan seed berdasarkan tanggal (00:00 WIB)
            function getSeed() {
                const now = new Date();
                // Sesuaikan ke WIB (UTC+7)
                const wibNow = new Date(now.getTime() + (7 * 60 * 60 * 1000));
                const year = wibNow.getUTCFullYear();
                const month = String(wibNow.getUTCMonth() + 1).padStart(2, '0');
                const date = String(wibNow.getUTCDate()).padStart(2, '0');
                return `${year}-${month}-${date}`; // Format: YYYY-MM-DD
            }
    
            // Fungsi untuk menghasilkan angka acak berdasarkan seed
            function seededRandom(seed) {
                let hash = 0;
                for (let i = 0; i < seed.length; i++) {
                    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
                }
                return function () {
                    hash = (hash * 9301 + 49297) % 233280;
                    return hash / 233280;
                };
            }
    
            // Fungsi untuk menghasilkan angka unik
            function generateUniqueNumber(randomFn) {
                const numbers = [];
                while (numbers.length < 6) {
                    const randomNum = Math.floor(randomFn() * 10);
                    if (!numbers.includes(randomNum)) {
                        numbers.push(randomNum);
                    }
                }
                return numbers.join('');
            }
    
            // Fungsi untuk membagi angka menjadi BBFS, AI, CB, Twin, dan Top 2D BB
            function splitNumber(number) {
                const digits = number.split('');
                const bbfs = number; // Semua digit
                const ai = digits.slice(1, 5).join(''); // 4 digit pertama
                const cb = `${digits[0]}/${digits[5]}`; // Digit pertama dan terakhir
                const twin = `${digits[3]}${digits[3]} - ${digits[1]}${digits[1]}`; // Pasangan angka kembar
                const top2dBB = `${digits[0]}${digits[5]} - ${digits[2]}${digits[4]} - ${digits[4]}${digits[1]}`;
                return { bbfs, ai, cb, twin, top2dBB };
            }
    
            // Fungsi untuk menampilkan data di halaman
            function displayDailyNumbers() {
                const seed = getSeed();
                const randomFn = seededRandom(seed);
                const container = document.getElementById('dailyNumbers');
    
                ids.forEach((id) => {
                    const number = generateUniqueNumber(randomFn);
                    const { bbfs, ai, cb, twin, top2dBB } = splitNumber(number);
    
                    const card = document.createElement('div');
                    card.className = 'card';
    
                    card.innerHTML = `
                        <div class="card-title">${id}</div>
                        <div class="card-text"><strong>BBFS:</strong> ${bbfs}</div>
                        <div class="card-text"><strong>AI:</strong> ${ai}</div>
                        <div class="card-text"><strong>CB:</strong> ${cb}</div>
                        <div class="card-text"><strong>Twin:</strong> ${twin}</div>
                        <div class="card-text"><strong>Top 2D BB:</strong> ${top2dBB}</div>
                        <a href="https://www.admto.online">
                        <button type="button" class="btn btn-outline-danger">PASANG SEKARANG</button></a>
                        <div class="footer">PREDIKSI TIDAK 100% AKURAT, UTAMAKAN PREDIKSI SENDIRI 🔥</div>
                    `;
    
                    container.appendChild(card);
                });
            }
    
            // Jalankan fungsi untuk menampilkan angka harian
            displayDailyNumbers();
