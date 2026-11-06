
const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event) {

    event.preventDefault();

    // Mengambil input
    const npm = document.getElementById("npm").value.trim();
    const password = document.getElementById("password").value;

    // Mengambil data akun
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Mencari akun berdasarkan NPM dan password
    const user = users.find(function(data) {

        return data.npm === npm &&
               data.password === password;

    });

    // Mengecek hasil login
    if (user) {

        localStorage.setItem(
            "userLogin",
            JSON.stringify(user)
        );

        alert("Login berhasil! Selamat datang " + user.nama);

        window.location.href = "beranda.html";

    } else {

        alert("NPM atau Password salah!");

    }

});

