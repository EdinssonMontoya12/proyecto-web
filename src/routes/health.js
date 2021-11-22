const express = require('express')
const rutas = express.Router()
const path= require('path')

const healthViews = '../views/info'

rutas.get('/health', (req, res) => {
    res.render(path.join(healthViews, 'health'))
})

module.exports = rutas