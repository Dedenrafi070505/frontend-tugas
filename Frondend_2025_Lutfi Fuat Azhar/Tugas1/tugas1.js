const readline = require("readline-sync"); 

// Data gaji pokok dan tunjangan
const gajiPokok = {
    A: 10000000,
    B: 8000000,
    C: 5000000
};

const tunjanganMenikah = {
    A: 2000000,
    B: 1500000,
    C: 1000000
};

//untuk menghitung total gaji
function hitungGaji(nama, golongan, status) {
    
    if (!gajiPokok[golongan]) {
        console.log("Golongan tidak valid! Pilih antara A, B, atau C.");
        return;
    }

    // status
    if (status !== "NIKAH" && status !== "BELUM") {
        console.log("Status tidak valid! Pilih antara NIKAH atau BELUM.");
        return;
    }

    // Menghitung gaji pokok dan tunjangan
    let gaji = gajiPokok[golongan];
    let tunjangan = status === "NIKAH" ? tunjanganMenikah[golongan] : 0;
    let total = gaji + tunjangan;

    // Menampilkan 
    console.log("===== Total Semuanyaa =====");
    console.log(`Nama        : ${nama}`);
    console.log(`Golongan    : ${golongan}`);
    console.log(`Status      : ${status}`);
    console.log(`Gaji Pokok  : Rp ${gaji.toLocaleString()}`);
    console.log(`Tunjangan   : Rp ${tunjangan.toLocaleString()}`);
    console.log(`Total Gaji  : Rp ${total.toLocaleString()}`);
    console.log("=====================");
}

const nama = readline.question("Masukkan nama karyawan: ");
const golongan = readline.question("Masukkan golongan (A/B/C): ").toUpperCase();
const status = readline.question("Masukkan status (NIKAH/BELUM): ").toUpperCase();


hitungGaji(nama, golongan, status);
