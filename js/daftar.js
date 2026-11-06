
const formDaftar = document.getElementById("formDaftar");

formDaftar.addEventListener("submit", function(event) {

    event.preventDefault();

    // Mengambil data form
    const nama = document.getElementById("fname").value.trim();
    const npm = document.getElementById("npm").value.trim();
    const password = document.getElementById("password").value;
    const hp = document.getElementById("hp").value.trim();

    // Mengambil data LocalStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Mengecek NPM
    const cekNPM = users.find(user => user.npm === npm);

    if (cekNPM) {
        alert("NPM sudah terdaftar!");
        return;
    }

    // Membuat akun baru
    const userBaru = {
        nama: nama,
        npm: npm,
        password: password,
        hp: hp
    };

    // Menyimpan akun
    users.push(userBaru);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Pendaftaran berhasil!");

    window.location.href = "login.html";

});
