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
        `UPDATE karyawan
        SET nama = 'Si Lang Lang', alamat = 'Ciputat', no_telepon = '031088759'
        WHERE id = 9;`,
        function(errorSql, hasil) {
        if (errorSql){
            throw errorSql
        }
        if (hasil.affectedRows>0){
            console.log(`berhasil update ${hasil.affectedRows} data`)
        }
        else {
            console.log('gagal update')
        }
    })
    database.end()
} catch (error){
    console.log(error)
}