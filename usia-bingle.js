function usiaUser(usia) {
    if (usia < 13) {
        return "Maaf, usia Anda di bawah ketentuan pengguna.";
    } else if (usia === undefined) {
        return "Mohon masukkan angka usia Anda.";
    } else {
        return "Silahkan lanjutkan registrasi."
    }
}

console.log(usiaUser(10))