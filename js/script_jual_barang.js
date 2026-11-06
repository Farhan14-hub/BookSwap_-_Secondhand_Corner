function cari() {
    let kata = prompt("Masukkan kata yang ingin dicari:");
        if (kata) {
    let hasil = document.body.innerText.toLowerCase();
        if (hasil.includes(kata.toLowerCase())) {
            alert("Informasi ditemukan: " + kata);
        } else {
            alert("Informasi tidak ditemukan.");
        }
    }
}

        function login() {
            alert("Fitur Login sedang disiapkan.");
        }
