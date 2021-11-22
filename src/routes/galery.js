const express = require('express')
const rutas = express.Router()
const path= require('path')

const galeryViews = '../views/info'

rutas.get('/galery', (req, res) => {
    res.render(path.join(galeryViews, 'galery'))
})

module.exports = rutas