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

var x = [0, 2427, 2553, 720, 651, 1890, 1692, 1892, 843, 1239, 47, 1627, 604, 2365, 1704, 167, 1852, 101, 1245, 1500, 356, 2887, 2492, 1605, 146, 1032, 1481, 708, 2781, 2532, 2884, 1486, 1136, 2741, 2721, 662, 179, 1124, 788, 1713, 1846, 424, 2428, 2147, 2119, 381, 607, 2191, 2006, 487, 830, 1988, 7, 615, 2355, 686, 80, 1533, 1432, 723, 1276, 1535, 2042, 2328, 783, 2280, 2254, 1226, 1219, 676, 2131, 193, 1994, 667, 608, 2193, 1141, 1701, 2343, 1540, 1004, 2573, 834, 109, 1543, 1641, 1468, 2278, 1157, 272, 1892, 1540, 1002, 229, 510, 393, 2286, 1579, 2666, 2834, 84, 1338, 2537, 2378, 2640, 105, 1909, 1143, 109, 2124, 2560, 316, 1422, 1984, 2504, 1239, 259, 1268, 1114, 1499, 135, 1322, 1836, 1033, 1767, 1615, 2783, 778, 2013, 119, 1245, 1048, 54, 2157, 1983, 1998, 1256, 2282, 426, 1133, 1969, 1010, 1907, 840, 1724, 2519, 2401, 354, 1421, 1593, 2730, 2223, 1431, 2395, 2712, 1904, 651, 1644, 589, 2795, 988, 20, 2357, 2259, 2145, 2509, 140, 1763, 666, 2077, 1032, 2665, 1399, 1513, 1655, 2648, 2261, 1851, 931, 726, 1099, 199, 1453, 464, 44, 2915, 353, 2459, 1701, 2597, 817, 669, 1890, 273, 612, 2690, 1644, 723, 2840, 1835, 2350, 1618, 445, 2076, 2352, 2270, 2076, 2493, 2739, 2828, 513, 531, 262, 1463, 1348, 528, 1632, 2872, 1366, 297, 471, 1777, 1050, 2678, 1216, 2047, 2769, 631, 576, 1223, 612, 2589, 1603, 370, 395, 302, 1211, 2715, 1067, 573, 2444, 1937, 1640, 474, 2221, 1784, 639, 1630, 2433, 1205, 2367, 2921, 2247, 977, 2264, 711, 814, 149, 2829, 1737, 1933, 1384, 2143, 2080, 1379, 205, 226, 343, 170, 768, 2451, 74, 2089, 1538, 586, 2393, 2954, 1355, 476, 433, 576, 2488, 357, 2597, 822, 2549, 1900, 945, 956, 1028, 2103, 1728, 2747, 1679, 585, 886, 980, 2634, 1521, 1032, 2387];

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
