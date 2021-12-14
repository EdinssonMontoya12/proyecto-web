const express = require('express')
const rutas = express.Router()
const path = require('path')
const passport =  require('passport')
const pool = require('../database')

const authViews = '../views/auth'

rutas.get('/login', (req, res) => {
    res.render(path.join(authViews, 'login'))
})

rutas.get('/register', (req, res) => {
    res.render(path.join(authViews, 'register'))
})

rutas.post('/login', (req, res, next) => {
    const { correo } = req.body

    if(correo == 'admin@admin.com'){
        passport.authenticate('local.login', {
            successRedirect: '/profileAdmin',
            failureRedirect: '/login',
            failureFlash: true
        })(req, res, next) 
    }else{
        passport.authenticate('local.login', {
            successRedirect: '/profile',
            failureRedirect: '/login',
            failureFlash: true
        })(req, res, next)
    }  
})

rutas.post('/register', passport.authenticate('local.register', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}))

rutas.get('/profile', async (req, res) => {

    const reservas =  await pool.query('select reserva.fecha, reserva.id from reserva where cedula_cliente = ?', [req.user.cedula])
    console.log(reservas)

    res.render(path.join(authViews, 'profile'), { reservas })
})

rutas.get('/logout', (req, res) => {
    req.logOut()
    res.render(path.join(authViews, 'login'))
})

module.exports = rutas