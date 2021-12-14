const express = require('express')
const rutas = express.Router()
const pool =  require('../database')
const path = require('path')
const { validarReserva, aSegundos} = require('../lib/helpers')

const bookingsView = '../views/booking'

rutas.get('/reserver', async (req, res) => {
    const cedula_cliente = req.user.cedula
    const reserva = {
        cedula_cliente
    }
    const booking = await pool.query('INSERT INTO reserva SET ?', [reserva])
    res.redirect('/reserver/' + booking.insertId)
})

rutas.get('/reserver/:id', async (req, res) => {
    const { id } = req.params
    const id_reserva = id
    const services = await pool.query('select * from servicio')
    const algo = await pool.query('select duracion from servicio')

    const servicesReserva =  await pool.query('select nombre, costo, fecha_reserva, hora_reserva, id_reserva, reserva_servicio.id, duracion from servicio inner join reserva_servicio on reserva_servicio.id_servicio = servicio.id where id_reserva = ?', [id_reserva])
    res.render(path.join(bookingsView, 'reserver'), { services, id_reserva, servicesReserva })
})

rutas.post('/reserve/add/service/:id', async (req, res) => {
    const { id } = req.params
    const id_reserva = id
    const { id_servicio, fecha_reserva, hora_de_reserva } = req.body
    const hora_reserva = aSegundos(hora_de_reserva)
    const validar = validarReserva(hora_reserva)
    console.log(validar)

    const nuevaRelacion = {
        id_reserva,
        id_servicio,
        fecha_reserva,
        hora_reserva
    }
    if(validar){
        req.flash('guardado', 'Se ha añadido el servicio')
        await pool.query('insert into reserva_servicio set ?', [nuevaRelacion])
        res.redirect('/reserver/' + id_reserva)
    }else{
        req.flash('error', 'No se ha podido añadir el servicio')
        res.redirect('/reserver/' + id_reserva)
    }
})

rutas.get('/delete/service/reserve/:id/:id_reserva', async (req, res) => {
    const { id, id_reserva } = req.params
    await pool.query('delete from reserva_servicio where id = ?', [id])
    res.redirect('/reserver/' + id_reserva)
})

rutas.get('/reserver/view/:id', async(req, res) => {

    const { id } = req.params
    const reservas = await pool.query('select nombre, costo, duracion, fecha_reserva, hora_reserva from servicio inner join reserva_servicio on reserva_servicio.id_servicio = servicio.id where id_reserva = ?', [id])
    res.render(path.join(bookingsView, 'servicesView'), {reservas})
})

rutas.get('/reserver/validate/:id_reserva', async (req, res) => {
    const { id_reserva } =  req.params
    const servicioReserva = await pool.query('select * from reserva_servicio where id_reserva = ?', [id_reserva])
    console.log(servicioReserva)
    if(servicioReserva[0] != null){
        res.redirect('/profile')
    }else{
        res.redirect('/reserver/' + id_reserva)
    }
})

rutas.get('/reserver/cancel/:id_reserva', async (req, res) => {
    const { id_reserva } = req.params
    await pool.query('delete from reserva_servicio where id_reserva = ?', [id_reserva])
    await pool.query('delete from reserva where id = ?', [id_reserva])
    res.redirect('/profile')
})

module.exports = rutas