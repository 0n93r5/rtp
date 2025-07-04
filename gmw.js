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

var x = [0, 8903, 5218, 899, 2243, 1086, 4918, 3360, 3221, 5831, 1560, 554, 3697, 4482, 2506, 1747, 4299, 4342, 9513, 5287, 4491, 7621, 2375, 1398, 9859, 9320, 1733, 7999, 8749, 6232, 2886, 5880, 7901, 6321, 367, 3141, 2599, 3617, 6229, 1115, 3848, 5333, 4715, 5766, 4081, 2512, 4797, 6936, 7944, 9392, 4952, 3586, 5082, 6190, 5313, 5767, 8847, 6016, 5819, 7001, 3546, 3630, 6378, 6834, 3713, 6872, 8660, 5270, 2687, 5382, 3388, 1820, 6733, 5459, 3250, 2800, 7331, 8707, 732, 876, 7423, 264, 135, 8340, 3376, 2006, 8738, 6411, 7031, 2365, 6816, 2276, 7284, 931, 1846, 7731, 8911, 5649, 5352, 9040, 3336, 4064, 9493, 2040, 2081, 5252, 5527, 6237, 2575, 1034, 3004, 9441, 3615, 9857, 4311, 4128, 2551, 9639, 8560, 3438, 6825, 6528, 2880, 8264, 9610, 4126, 1269, 9740, 7904, 2664, 4847, 8976, 686, 8694, 7251, 738, 2234, 5838, 4063, 2096, 2385, 5903, 4919, 2036, 5957, 4369, 1574, 8331, 9750, 9131, 8638, 7526, 8634, 1882, 4443, 8722, 677, 834, 1509, 3026, 7208, 8352, 6561, 1590, 6921, 9388, 674, 6214, 9446, 4452, 5394, 6529, 3816, 9664, 4425, 4405, 5737, 2951, 111, 3610, 1995, 6567, 8430, 8498, 6487, 8121, 4601, 4304, 7337, 1015, 1821, 7270, 9002, 403, 4702, 159, 213, 717, 3196, 8296, 2744];

for (let i = 1; i < 319; i++) {
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

    if (i == 0) {
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
