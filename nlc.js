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

var x = [0, 573, 2620, 1325, 2165, 1982, 2762, 1047, 2670, 2717, 2271, 2281, 1878, 670, 2, 1983, 1558, 1535, 561, 1817, 1517, 2820, 1738, 2400, 2717, 1265, 806, 2574, 643, 1618, 695, 1142, 803, 1919, 268, 2676, 1700, 1604, 2315, 1997, 2112, 840, 446, 1778, 391, 260, 1321, 233, 380, 455, 1850, 613, 2296, 215, 1154, 1135, 69, 1186, 555, 229, 669, 2254, 2195, 2729, 2901, 1006, 2008, 1421, 1484, 574, 2852, 1983, 793, 697, 1324, 2471, 1796, 2201, 587, 1176, 1050, 1902, 1356, 534, 1527, 1594, 2583, 837, 264, 45, 2331, 2659, 175, 885, 1502, 1607, 2458, 33, 1361, 2585, 2477, 2581, 112, 523, 1415, 976, 408, 1809, 475, 2924, 2161, 1085, 1481, 942, 1758, 574, 2588, 1327, 2506, 2490, 1844, 1170, 2038, 2202, 2879, 311, 1409, 125, 611, 2855, 2559, 1431, 2400, 977, 2853, 67, 1596, 644, 1611, 2247, 486, 2366, 1730, 2159, 495, 1917, 537, 109, 2382, 2820, 1195, 1703, 571, 1008, 2827, 1737, 2334, 372, 2963, 565, 2409, 1145, 705, 2376, 2643, 922, 91, 454, 1470, 2863, 2484, 1321, 2876, 1432, 2239, 526, 2670, 1364, 2420, 985, 2180, 1218, 2945, 1851, 2116, 1361, 2419, 2456, 156, 2571, 2237, 2134, 418, 463, 2543, 538, 1359, 2543, 2867, 989, 2087, 1607, 220, 1112, 597, 1528, 1888, 1243, 1028, 1867, 472, 2436, 1856, 1865, 1541, 1398, 2438, 2683, 477, 1328, 2098, 2686, 2326, 736, 2888, 2257, 1995, 655, 605, 474, 2012, 1367, 1710, 1509, 187, 1778, 897, 1566, 2900, 525, 811, 1202, 1932, 2701, 577, 913, 326, 809, 1643, 2479, 2538, 2168, 1438, 2995, 1351, 1204, 282, 1791, 1618, 2775, 1963, 2313, 1616, 516, 1587, 785, 1624, 2026, 624, 1428, 2060, 52, 1937, 192, 1913, 1333, 1879, 1714, 437, 1170, 2818, 2212, 1313, 1568, 2058, 515, 1224, 2528, 1279, 1984, 847, 2952, 2619, 1165, 556, 525, 414, 2538, 643, 2565, 1226];

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
