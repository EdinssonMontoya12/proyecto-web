const express = require('express')
const rutas = express.Router()
const path = require('path')

const authViews = '../views/auth'

rutas.get('/login', (req, res) => {
    res.render(path.join(authViews, 'login'))
})

module.exports = rutas