const express = require('express')
const rutas = express.Router()
const path= require('path')

const serviceViews = '../views/info'

rutas.get('/service', (req, res) => {
    res.render(path.join(serviceViews, 'service'))
})

module.exports = rutas