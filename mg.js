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

var x = [0, 1126, 1173, 1329, 1219, 1018, 1141, 1080, 1061, 1193, 1288, 1213, 1236, 1327, 1342, 1085, 1323, 1157, 1037, 1007, 1305, 1117, 1055, 1333, 1073, 1089, 1316, 1071, 1311, 1132, 1103, 1038, 1004, 1269, 1242, 1192, 1084, 1199, 1373, 1111, 1170, 1337, 1160, 1129, 1198, 1181, 1260, 1400, 1205, 1124, 1078, 1369, 1276, 1386, 1248, 1052, 1014, 1154, 1368, 1310, 1303, 1347, 1307, 1176, 1394, 1102, 1367, 1253, 1161, 1375, 1374, 1291, 1231, 1031, 1044, 1195, 1257, 1298, 1168, 1091, 1036, 1206, 1074, 1264, 1139, 1001, 1149, 1215, 1319, 1338, 1378, 1202, 1275, 1302, 1225, 1058, 1395, 1294, 1238, 1011, 1313, 1020, 1366, 1261, 1381, 1214, 1163, 1328, 1237, 1309, 1322, 1396, 1324, 1045, 1039, 1051, 1234, 1188, 1362, 1377, 1008, 1244, 1034, 1113, 1112, 1190, 1012, 1174, 1361, 1109, 1343, 1233, 1189, 1076, 1175, 1265, 1155, 1245, 1226, 1005, 1325, 1359, 1025, 1125, 1304, 1017, 1153, 1114, 1177, 1069, 1299, 1385, 1028, 1000, 1266, 1021, 1019, 1167, 1077, 1066, 1023, 1272, 1300, 1217, 1363, 1339, 1196, 1371, 1230, 1151, 1254, 1251, 1178, 1070, 1003, 1104, 1024, 1379, 1274, 1087, 1229, 1158, 1060, 1365, 1258, 1022, 1331, 1156, 1201, 1140, 1216, 1207, 1096, 1056, 1285, 1393, 1263, 1138, 1065, 1223, 1209, 1246, 1399, 1136, 1187, 1057, 1107, 1046, 1194, 1249, 1082, 1116, 1243, 1006, 1053, 1075, 1027, 1282, 1335, 1127, 1277, 1232, 1370, 1164, 1186, 1144, 1191, 1222, 1200, 1224, 1297, 1340, 1148, 1332, 1062, 1398, 1079, 1179, 1002, 1009, 1239, 1183, 1336, 1016, 1033, 1171, 1118, 1387, 1013, 1380, 1349, 1095, 1227, 1352, 1259, 1010, 1043, 1180, 1290, 1351, 1247, 1050, 1279, 1364, 1280, 1221, 1048, 1218, 1308, 1286, 1086, 1270, 1145, 1134, 1376, 1391, 1321, 1330, 1182, 1185, 1110, 1326, 1105, 1360, 1137, 1344, 1341, 1397, 1348, 1228, 1029, 1256, 1143, 1317, 1072, 1108, 1220, 1204, 1041, 1100, 1098, 1345, 1123, 1267, 1092, 1093, 1119, 1392, 1281, 1334, 1115, 1255, 1135, 1315, 1301, 1090, 1210, 1268, 1354, 1092, 1093, 1119, 1392, 1281, 1334, 1115, 1255, 1135, 1315, 1301, 1090, 1210, 1268, 1354];

for (let i = 1; i < 500; i++) {
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

    if (i == 1 || i == 3 || i == 10 || i == 12 || i == 15 || i == 18 || i == 29 || i == 41 || i == 46 || i == 53 || i == 107 || i == 124 || i == 141 || i == 150 || i == 168 || i == 239) {
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
