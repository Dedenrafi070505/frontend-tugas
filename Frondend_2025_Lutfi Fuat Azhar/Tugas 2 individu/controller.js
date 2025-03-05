// controller.js

const users = require("./data");

// **Fungsi untuk menampilkan data**
function lihatData() {
    console.log("===== Data Pengguna =====");
    users.map((user, index) => {
        console.log(`${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
}

// **Fungsi untuk menambah data*
function tambahData(nama, umur, alamat, email) {
    users.push({ nama, umur, alamat, email });
    console.log(`Data ${nama} berhasil ditambahkan!`);
}

// **Fungsi untuk menghapus data berdasarkan nama*
function hapusData(nama) {
    const index = users.findIndex(user => user.nama.toLowerCase() === nama.toLowerCase());
    
    if (index !== -1) {
        users.splice(index, 1);
        console.log(`Data ${nama} berhasil dihapus!`);
    } else {
        console.log(`⚠️ Data dengan nama ${nama} tidak ditemukan.`);
    }
}

// **Eksekusi Program**
console.log("Sebelum Menambah Data:");
lihatData();

// **Menambah 2 Data Baru**
tambahData("Kevin", 23, "Pontianak", "kevin@example.com");
tambahData("Lia", 26, "Solo", "lia@example.com");

console.log("Setelah Menambah Data:");
lihatData();

// **Menghapus Salah Satu Data**
hapusData("Citra");

console.log("Setelah Menghapus Data:");
lihatData();
