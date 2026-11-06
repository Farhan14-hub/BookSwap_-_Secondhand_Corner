function bukaLogin() {
    window.location.href = "login.html";
}


// Mengecek status login ketika halaman dibuka
document.addEventListener("DOMContentLoaded", function() {

    // Mengambil data user yang sedang login
    const userLogin = JSON.parse(
        localStorage.getItem("userLogin")
    );

    const belumLogin = document.getElementById("belumLogin");
    const sudahLogin = document.getElementById("sudahLogin");

    // Jika pengguna sudah login
    if (userLogin) {

        belumLogin.style.display = "none";
        sudahLogin.style.display = "block";

        // Menampilkan data pengguna
        document.getElementById("profilNama").textContent =
            userLogin.nama || "-";

        document.getElementById("profilNpm").textContent =
            userLogin.npm || "-";

        document.getElementById("profilHp").textContent =
            userLogin.hp || "-";

    } else {

        // Jika pengguna belum login
        belumLogin.style.display = "block";
        sudahLogin.style.display = "none";

    }

});


// Tombol Login
function bukaLogin() {
    window.location.href = "login.html";
}


// Tombol Daftar
function bukaDaftar() {
    window.location.href = "daftar.html";
}


// Tombol Logout
function logout() {

    const konfirmasi = confirm("Apakah Anda yakin ingin logout?");

    if (konfirmasi) {

        // Menghapus data login
        localStorage.removeItem("userLogin");

        alert("Logout berhasil!");

        // Memuat ulang halaman profil
        window.location.reload();

    }

}
