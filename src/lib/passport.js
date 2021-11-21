const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const pool = require('../database')
const helpers = require('./helpers')

passport.use('local.login', new LocalStrategy({
    usernameField: 'correo',
    passwordField: 'contrasena',
    passReqToCallback: true
}, async (req, correo, contrasena, done) => {
    const rows = await pool.query('SELECT * FROM cliente WHERE correo = ?', [correo])
    if(rows.length > 0){
        const user = rows[0]
        const validePassword = await helpers.matchPassword(contrasena, user.contrasena)
        if(validePassword){
            done(null, user, req.flash('guardado', 'Bienvenido ' + user.nombre))
        }else{
            done(null, false, req.flash('error', 'Contraseña incorrecta'))
        }

    }else{
        return done(null, false, req.flash('error', 'El usuario no existe'))
    }
}))

passport.use('local.register', new LocalStrategy({
    usernameField: 'nombre',
    passwordField: 'contrasena',
    passReqToCallback: true
}, async (req, nombre, contrasena, done) => {
    const { apellido, cedula, correo, telefono } = req.body
    const nuevoCliente = {
        cedula,
        nombre,
        apellido,
        correo,
        contrasena,
        telefono
    }
    nuevoCliente.contrasena = await helpers.encryptPassword(contrasena)
    await pool.query('INSERT INTO cliente SET ?', [nuevoCliente])
    return done(null, nuevoCliente)
}))

passport.serializeUser((cliente, done) => {
    done(null, cliente.cedula)
})

passport.deserializeUser( async (cedula, done) => {
    const rows = await pool.query('SELECT * FROM cliente WHERE cedula = ?', [cedula])
    done(null, rows[0])
})