const express = require('express')
const rutas = express.Router()
const path = require('path')
const pool = require('../database')
const { collapse, collapseTipo, aSegundos} = require('../lib/helpers')

const adminViews = '../views/admin'

rutas.get('/profileAdmin', async (req, res) => {
    const reservas = await pool.query('select cliente.nombre, cliente.apellido, cliente.cedula, reserva.id, reserva.fecha from cliente inner join reserva on reserva.cedula_cliente = cliente.cedula order by cliente.cedula desc')
    const usuarios = collapse(reservas)
    res.render(path.join(adminViews,'users'), { usuarios })
})

rutas.get('/reserver/view/admin/:id', async (req, res) => {

    const { id } = req.params
    const reservas = await pool.query('select nombre, costo, duracion, fecha_reserva, hora_reserva from servicio inner join reserva_servicio on reserva_servicio.id_servicio = servicio.id where id_reserva = ?', [id])
    res.render(path.join(adminViews,'viewReserverAdmin'), { reservas })
})

rutas.get('/reserver/delete/admin/:id_reserva', async (req, res) => {
    const { id_reserva } = req.params
    await pool.query('delete from reserva_servicio where id_reserva = ?', [id_reserva])
    await pool.query('delete from reserva where id = ?', [id_reserva])
    res.redirect('/profileAdmin')
})

rutas.get('/serviceAdmin', async (req, res) => {
    const servicios =  await pool.query('select servicio.nombre, servicio.id as id_servicio, tipo_servicio.id as id_tipo, tipo_servicio.nombre as tipo from tipo_servicio inner join servicio on servicio.id_tipo_servicio = tipo_servicio.id order by tipo_servicio.id desc')
    const tipos = collapseTipo(servicios)
    res.render(path.join(adminViews, 'services'), { tipos })
})

rutas.post('/createType/:id', async (req, res) => {
    const {id} = req.params
    const { nuevo_tipo } = req.body
    const nombre = nuevo_tipo
    const tipoServicio = {
        id,
        nombre
    }
    console.log(tipo)
    await pool.query('insert into tipo_servicio set ?', [tipoServicio])
    res.redirect('/service/create')
})

rutas.get('/service/create', async (req, res) => {
    const tipo = await pool.query('select * from tipo_servicio')
    res.render(path.join(adminViews, 'createService'), { tipo })
})

rutas.post('/service/create', async (req, res) => {
    const { id_tipo_servicio, nombre, costo, duracion_servicio, descripcion } =  req.body
    const duracion = aSegundos(duracion_servicio)
    const servicio =  {
        nombre,
        costo,
        duracion,
        descripcion,
        id_tipo_servicio
    }
    await pool.query('insert into servicio set ?', [servicio])
    res.redirect('/serviceAdmin')
})

rutas.get('/service/delete/:id', async (req, res) => {
    const {id} =  req.params
    await pool.query('delete from servicio where id = ?', [id])
    res.redirect('/serviceAdmin')
})

rutas.get('/service/update/:id', async (req, res) => {
    const {id} = req.params
    const servicio = await pool.query('select servicio.nombre, costo, duracion, descripcion, tipo_servicio.nombre as nombre_tipo, tipo_servicio.id as id_tipo from tipo_servicio inner join servicio on tipo_servicio.id = servicio.id_tipo_servicio where servicio.id = ?', [id])
    const tipos = await pool.query('select * from tipo_servicio')
    console.log(servicio)
    res.render(path.join(adminViews, 'updateService'), {servicio: servicio[0], tipos, id})
})

rutas.post('/service/update/:id', async (req, res) => {
    const { id } =  req.params
    const { id_tipo_servicio, nombre, costo, duracion, descripcion } =  req.body
    const servicio =  {
        nombre,
        costo,
        duracion,
        descripcion,
        id_tipo_servicio
    }
    await pool.query('update servicio set ? where id = ?', [servicio, id])
    res.redirect('/serviceAdmin')
})



module.exports = rutas