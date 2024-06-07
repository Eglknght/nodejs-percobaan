let nama = 'Elang'
let alamat = 'Pamulang'
let profesi = 'Mahasiswa'
function biodata() {
    return ` Nama : ${nama}\n Alamat : ${alamat}\n Profesi : ${profesi}`
}

module.exports = {
    nama, 
    alamat,
    profesi,
    cetakbiodata: biodata()
}
// console.log(nama +' '+ alamat)