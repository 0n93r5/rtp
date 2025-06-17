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

var x = [0, 321, 146, 63, 1005, 83, 477, 448, 1186, 684, 96, 849, 337, 32, 943, 116, 847, 392, 654, 1040, 391, 1123, 994, 111, 724, 1044, 555, 1032, 126, 274, 471, 217, 606, 22, 91, 940, 1172, 86, 241, 644, 852, 586, 1184, 282, 343, 917, 459, 2, 33, 678, 558, 297, 600, 506, 198, 97, 1091, 1145, 804, 1170, 789, 295, 1016, 261, 767, 853, 737, 494, 846, 628, 749, 810, 841, 766, 1012, 516, 537, 416, 511, 636, 980, 552, 1042, 623, 582, 457, 331, 89, 419, 399, 489, 307, 1161, 267, 354, 954, 1149, 714, 668, 121, 1212, 122, 666, 683, 786, 959, 335, 165, 440, 1139, 957, 543, 550, 20, 908, 1001, 1124, 313, 197, 336, 127, 332, 979, 1116, 67, 164, 82, 1057, 319, 71, 373, 893, 534, 495, 703, 478, 288, 522, 921, 1182, 257, 334, 988, 897, 809, 310, 710, 832, 1053, 280, 425, 813, 731, 184, 507, 1189, 176, 673, 732, 276, 483, 665, 1234, 398, 59, 296, 1115, 237, 958, 733, 324, 462, 890, 549, 1093, 1027, 1164, 964, 730, 689, 106, 686, 868, 227, 596, 401, 428, 821, 1159, 19, 31, 1011, 953, 1205, 622, 205, 207, 655, 485, 55, 1143];

for (let i = 1; i < 195; i++) {
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

    if (i == 44 || i == 35 || i == 48 || i == 74 || i == 105 || i == 41 || i == 69) {
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
