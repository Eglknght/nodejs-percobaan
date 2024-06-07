// panggil module mysql dari node_modules
const mysql = require('mysql2')

// koneksi
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'xdb_belajar_database',
})

database.connect()

try {
    database.query('SELECT * FROM karyawan', function(error, hasil) {
        if (error){
            throw error
        }
        for (const i in hasil) {
            let hp = ''
            if (hasil[i].no_telepon){
                hp = hasil[i].no_telepon
            }
            else {
                hp = '-'
            }
            console.log(hasil[i].nama + ' ' + hp)
        }
    })
    database.end()
} catch (err) {
    console.log(err)
}