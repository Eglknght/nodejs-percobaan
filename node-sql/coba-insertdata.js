const mysql = require('mysql2')
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'xdb_belajar_database',
})

database.connect()

try {
    database.query(
        `INSERT INTO 
        karyawan (nama, alamat, no_telepon, gol_darah, jenis_kelamin, departemen_id, jabatan_id) 
        VALUES 
        ('Naruto', 'Jakarta', '01924788794', 'AB', 'L', 1, 2),
        ('Sasuke', 'Bandung', '093508273', 'O', 'L', 1,2)
        `,
        function(errorSql, hasil) {
        if (errorSql){
            throw errorSql
        }
        if (hasil.affectedRows>0){
            console.log(`berhasil insert ${hasil.affectedRows} data`)
        }
        else {
            console.log('gagal insert')
        }
    })
    database.end()
} catch (error){
    console.log(error)
}