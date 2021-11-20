const express = require('express')
const rutas = express.Router()
const path= require('path')

const aboutViews = '../views/info'

rutas.get('/about', (req, res) => {
    res.render(path.join(aboutViews, 'about'))
})

module.exports = rutas