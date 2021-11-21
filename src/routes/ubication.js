const express = require('express')
const rutas = express.Router()
const path= require('path')

const ubicationViews = '../views/info'

rutas.get('/ubication', (req, res) => {
    res.render(path.join(ubicationViews, 'ubication'))
})

module.exports = rutas