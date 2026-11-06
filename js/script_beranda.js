
// Mengecek status login
const dataLogin = localStorage.getItem("userLogin");

if (!dataLogin) {

    alert("Silakan login terlebih dahulu!");

    window.location.href = "login.html";

} else {

    const userLogin = JSON.parse(dataLogin);

    // Menampilkan nama pengguna
    document.getElementById("namaUser").textContent =
        userLogin.nama;

}


// Fungsi Logout
function logout() {

    localStorage.removeItem("userLogin");

    alert("Berhasil logout!");

    window.location.href = "login.html";

}


// Fungsi melihat buku
function lihatBuku() {

    document.getElementById("buku").scrollIntoView({
        behavior: "smooth"
    });

}


// Fungsi membeli buku
function beliBuku(nama) {

    alert("Anda memilih buku: " + nama);

}


// Fungsi katalog
function katalog_buku() {

    window.location.href = "katalog_buku.html";

}
