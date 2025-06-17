const patterns = [
    ',Turbo On,',
    ',Turbo Off,',
    ',Turbo Off,',
    ',Turbo On,',
    ',Turbo Off,',
    ',Turbo Off,'
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

var x = [0, 974, 905, 873, 973, 852, 977, 966, 861, 882, 854, 929, 917, 885, 926, 941, 901, 927, 968, 853, 972, 860, 978, 855, 969, 919, 936, 979, 938, 898, 922, 877, 960, 918, 907, 970, 851, 947, 908, 935, 883, 856, 959, 896, 858, 913, 864, 893, 897, 872, 961, 876, 884, 930, 921, 912, 967, 931, 963, 910, 916, 976, 880, 920, 886, 902, 951, 889, 881, 850, 949, 866, 906, 909, 925, 890, 928, 932, 874, 929, 917, 885, 926, 941, 901, 927, 968, 853, 972, 860, 978, 855, 969, 919, 936, 991, 942, 918, 981, 928];

for (let i = 1; i < 700; i++) {
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

    if (i == 16 || i == 22 || i == 2 || i == 1 || i == 8 || i == 11 || i == 19 || i == 14 || i == 18 || i == 32 || i == 62 || i == 30 || i == 10 || i == 3 || i == 13 || i == 22 || i == 37 || i == 15) {
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
}
