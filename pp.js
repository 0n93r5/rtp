// Daftar pola yang tersedia
const patterns = [
    '✅¸❌¸❌¸',
    '❌¸✅¸❌¸',
    '❌¸❌¸✅¸',
    '✅¸❌¸✅¸',
    '❌¸✅¸✅¸',
    '❌¸❌¸❌¸'
];

// Variabel angka dan teks yang akan ditambahkan
const numbers = [10, 20, 50, 70, 100];
const texts = ['Auto', 'Manual'];

// Fungsi untuk memilih pola acak
function getRandomPatterns(count) {
    const shuffled = patterns.sort(() => 0.5 - Math.random()); // Mengacak pola
    return shuffled.slice(0, count); // Mengambil 'count' pola acak
}

// Fungsi untuk memilih angka acak
function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

// Fungsi untuk memilih teks acak
function getRandomText() {
    return texts[Math.floor(Math.random() * texts.length)];
}

// Fungsi untuk mengupdate pola di modal
function updatePatterns() {
    const randomPatterns = getRandomPatterns(3); // Mendapatkan 3 pola acak

    // Update setiap pola dengan angka, pola, dan teks acak
    $("#pola1").html(`${getRandomNumber()} ${randomPatterns[0]} ${getRandomText()}`);
    $("#pola2").html(`${getRandomNumber()} ${randomPatterns[1]} ${getRandomText()}`);
    $("#pola3").html(`${getRandomNumber()} ${randomPatterns[2]} ${getRandomText()}`);
}

// Menambahkan event listener untuk tombol "Pola Main"
$('.btn-game').on('click', function () {
    // Update pola, angka, dan teks saat tombol ditekan
    updatePatterns();
});

// Menambahkan event listener untuk modal
$('#modal-pola').on('show.bs.modal', function () {
    // Memperbarui pola, angka, dan teks setiap kali modal dibuka
    updatePatterns();
});


var x = [0, 405, 383, 430, 432, 408, 409, 392, 428, 395, 446, 390, 435, 388, 400, 427, 417, 419, 384, 412, 393, 406, 426, 425, 445, 44074, 99, 124, 135, 102, 161, 81, 85, 29, 20, 137, 64, 22, 122, 150, 101, 156, 14, 83, 104, 88, 127, 72, 25, 34, 21, 39, 179, 164, 176, 4, 70, 48, 9, 84, 183, 163, 180, 6, 146, 153, 173, 62, 188, 60, 170, 108, 129, 138, 67, 140, 28, 133, 113, 110, 96, 100, 31, 53, 55, 18, 41, 142, 152, 166, 79, 187, 186, 111, 44, 97, 23, 174, 98, 80, 19, 158, 73, 107, 103, 77, 123, 71, 78, 49, 190, 93, 35, 169, 32, 40, 167, 160, 191, 116, 151, 172, 3, 38, 17, 2, 36, 26, 50, 33, 16, 56, 115, 75, 159, 37, 171, 58, 182, 15, 76, 105, 90, 130, 42, 87, 192, 147, 47, 139, 178, 119, 143, 154, 141, 106, 30, 52, 51, 136, 121, 59, 184, 1, 175, 57, 86, 63, 181, 13, 54, 8, 148, 112, 193, 149, 45, 185, 82, 27, 91, 120, 46, 118, 126, 128, 7, 68, 157, 65, 168, 145, 92, 11, 61, 189, 155, 109, 5, 117, 89, 114, 144, 12, 10, 95, 132, 94, 134, 177, 125, 69, 194, 24, 162, 165, 43, 131, 66];

for (let i = 1; i < 1000; i++) {
    const d = new Date();
    var date = d.getUTCDate();
    var day = d.getUTCDay() + 1;
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth() + 1;
    var hour = d.getUTCHours();
    var min = d.getMinutes();

    if (min < 30) {
        min = 1;
    } else {
        min = 2;
    }

    var xx = day + year * month * date;
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];

    if (i == 4 || i == 9 || i == 8 || i == 17 || i == 136 || i == 6 || i == 6 || i == 5 || i == 120 || i == 26 || i == 3 || i == 13 || i == 147) {
        xx = xx % 27;
        xx += 65;
    } else {
        xx = xx % 83;
        xx += 8;
    }

    $("#percent-txt-" + i).html(xx + "%");
    $("#percent-bar-" + i).attr("aria-valuenow", xx).css("width", xx + "%");

    if (xx < 30) {
        $("#percent-bar-" + i).addClass("red shine");
    } else if (xx > 70) {
        $("#percent-bar-" + i).addClass("green shine");
    } else {
        $("#percent-bar-" + i).addClass("yellow shine");
    }
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
    $("#modal-pattern").html("✅¸❌¸✅¸");


}
