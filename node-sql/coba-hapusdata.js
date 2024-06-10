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
        `DELETE FROM karyawan WHERE id = 6;`,
        function(errorSql, hasil) {
        if (errorSql){
            throw errorSql
        }
        if (hasil.affectedRows>0){
            console.log(`berhasil dihapus ${hasil.affectedRows} data`)
        }
        else {
            console.log('gagal dihapus')
        }
    })
    database.end()
} catch (error){
    console.log(error)
}