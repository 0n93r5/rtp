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

var x = [0, 2296, 1265, 2929, 1330, 1180, 2835, 767, 2504, 2177, 1613, 956, 2522, 821, 592, 1473, 422, 2176, 1615, 617, 2523, 1167, 1318, 1957, 596, 44, 2122, 232, 2807, 1312, 1793, 2453, 1503, 724, 99, 2344, 448, 2420, 385, 2306, 2625, 1702, 2613, 817, 246, 2489, 2354, 199, 2590, 656, 149, 1826, 2570, 1449, 1101, 108, 712, 1234, 1023, 1612, 1983, 2284, 893, 2653, 2627, 2818, 656, 2733, 2659, 547, 1235, 2616, 1417, 870, 178, 942, 282, 590, 2627, 1187, 2047, 1054, 2131, 165, 2419, 358, 284, 363, 2374, 535, 1726, 1804, 2233, 116, 396, 1462, 171, 1761, 2040, 1136, 2892, 1432, 338, 106, 1008, 1258, 1932, 2347, 2702, 563, 906, 531, 1161, 65, 1896, 50, 942, 1166, 1172, 1001, 2311, 1188, 2470, 1816, 2496, 1336, 1373, 159, 1257, 530, 2820, 113, 731, 2052, 1116, 86, 1262, 1770, 660, 32, 929, 793, 535, 1696, 731, 1410, 2941, 2650, 1899, 88, 1380, 294, 523, 1456, 1656, 2640, 1987, 2417, 1136, 1626, 2667, 357, 2187, 2440, 1343, 1791, 1611, 1629, 242, 29, 145, 981, 2045, 2071, 634, 978, 1599, 600, 2457, 1043, 2401, 2677, 2836, 417, 1210, 396, 611, 2948, 1809, 2935, 150, 1574, 1225, 497, 1102, 270, 2554, 2440, 1175, 1480, 1821, 219, 2028, 1090, 1176, 2294, 1404, 2506, 267, 404, 332, 2830, 1682, 1428, 2781, 2612, 76, 1783, 591, 1164, 1491, 1641, 1581, 547, 493, 1230, 1611, 2345, 2002, 2664, 1166, 2141, 2303, 1782, 1412, 2007, 411, 1766, 1588, 470, 1584, 1613, 2382, 1524, 1092, 246, 2997, 718, 2096, 722, 2548, 2624, 841, 160, 216, 921, 1997, 630, 1996, 1483, 1752, 70, 1026, 1486, 1032, 1947, 1865, 2828, 1886, 2966, 1706, 2200, 62, 44, 2816, 2619, 1104, 139, 582, 2640, 1680, 2805, 1595, 185, 1091, 2523, 1380, 672, 1539, 1254, 465, 1090, 684, 1138, 1507, 1985, 1320, 2437, 2043, 330, 392];

for (let i = 1; i < 300; i++) {
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
    xx = xx % 83;
    xx += 8;

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
