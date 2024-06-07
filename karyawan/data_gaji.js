let gajiPokok = 4000000
let tunjanganJabatan = 850000
let bpjs = 2.5/100 * gajiPokok
let net = gajiPokok + tunjanganJabatan - bpjs

function slipGaji() {
    let hasil = 
    `Gaji Karyawan Bulan Juni 2024\n`+
    `==============================\n`+
    `Gaji Pokok = RP ${gajiPokok.toLocaleString('id-ID')}\n`+
    `Tunjangan Jabatan = RP ${tunjanganJabatan.toLocaleString('id-ID')}\n`+
    `Potongan BPJS = RP ${bpjs.toLocaleString('id-ID')}\n`+
    `Net Gaji + RP ${net.toLocaleString('id-ID')}`

    return hasil
}

module.exports = {
    cetakGaji: slipGaji(),
}