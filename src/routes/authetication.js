const express = require('express')
const rutas = express.Router()
const path = require('path')
const passport =  require('passport')

const authViews = '../views/auth'

rutas.get('/login', (req, res) => {
    res.render(path.join(authViews, 'login'))
})

rutas.get('/register', (req, res) => {
    res.render(path.join(authViews, 'register'))
})

rutas.post('/login', (req, res, next) => {
    passport.authenticate('local.login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
})

rutas.post('/register', passport.authenticate('local.register', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}))

rutas.get('/profile', (req, res) => {
    res.render(path.join(authViews, 'profile'))
})

module.exports = rutas