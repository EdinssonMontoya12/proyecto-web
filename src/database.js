const mysql = require('mysql')
const { promisify } = require('util')
const { database } = require('./keys')

const pool = mysql.createPool(database)

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Se ha perdido la conexión con la base de datos')
        }
        if(error.code === 'ER_CON_COUNT_ERROR'){
            console.error('La base de datos tiene muchas conexiones')
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('Se ha rechazado la conexion')
        }
    }
    if(connection) connection.release()
    console.log('La base de datos esta conectada')
    return;
})

pool.query = promisify(pool.query)

module.exports = pool