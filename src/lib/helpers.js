const bcryp = require('bcryptjs')
const pool = require('../database')

const helpers = {}

helpers.encryptPassword = async (password) => {
    const salt = await bcryp.genSalt(10)
    const hash = await bcryp.hash(password, salt)

    return hash
}

helpers.matchPassword = async (password, savePassword) => {
    try {
        return await bcryp.compare(password, savePassword)
    } catch (e) {
        console.log(e)
    }
}

helpers.aSegundos = (hora) => {
    const arrayHora = hora.split(':') 
    return parseInt(arrayHora[0],10)*3600 + parseInt(arrayHora[1],10)*60
}

helpers.validarReserva = (segundos) => {

    if((segundos >= 28800 && segundos <= 46800) || 
        (segundos >= 50400 && segundos <= 75600)){
        
        return true
    }else{
        return false
    }
}

helpers.collapse = (reservas) => {
    const usuarios = crearUsuarios(reservas)
    return usuarios
}

helpers.collapseTipo = (servicios) => {
    const tipos = crearTipos(servicios)
    return tipos
}

function crearUsuarios(reservas){
    
    const usuarios = []

    for (let index = 0; index < reservas.length; index++) {
        const element = reservas[index];
        
        if(!verificarUsuario(usuarios, element.cedula)){
            const reserva = crearReserva(element.cedula, reservas)
            const cedula =  element.cedula
            const nombre = element.nombre
            const apellido = element.apellido
            const usuario = {
                cedula,
                nombre,
                apellido,
                reserva
            }
            usuarios.push(usuario)
        }
    }

    return usuarios
}

function crearTipos(servicios){

    const tipos = []

    for (let index = 0; index < servicios.length; index++) {
        const element = servicios[index];
        
        if(!verificarTipo(tipos, element.tipo)){
            const servicio = crearServicios(element.tipo, servicios)
            const id_tipo = element.id_tipo
            const tipo =  element.tipo
            const objTipo = {
                tipo,
                id_tipo,
                servicio
            }
            tipos.push(objTipo)
        }
    }
    return tipos
}

function crearServicios(tipo, servicios){

    const servicio = []

    for (let index = 0; index < servicios.length; index++) {
        const element = servicios[index];
        
        if(element.tipo == tipo){
            const id_servicio = element.id_servicio
            const nombre = element.nombre
            const algo = {
                id_servicio,
                nombre
            }
            servicio.push(algo)
        }
    }
    return servicio
}

function crearReserva(cedula, reservas){

    const reserva = []

    for (let index = 0; index < reservas.length; index++) {
        const element = reservas[index];
        
        if(element.cedula == cedula){
            const id = element.id
            const fecha = element.fecha
            const algo = {
                id,
                fecha
            }
            reserva.push(algo)
        }
    }
    return reserva
}

function verificarUsuario (usuarios, cedula){

    var validar = false

    for (let index = 0; index < usuarios.length; index++) {
        const element = usuarios[index];

        if(element.cedula ==  cedula){
            validar = true
        }
    }
    return validar
}

function verificarTipo(tipos, tipo){

    var validar = false

    for (let index = 0; index < tipos.length; index++) {
        const element = tipos[index];
        
        if(element.tipo == tipo){
            validar = true
        }
    }
    return validar
}

module.exports = helpers