const express = require('express')
const rutas = express.Router()



rutas.get('/', (req, res) => {
    res.render('../views/home')
})

module.exports = rutas