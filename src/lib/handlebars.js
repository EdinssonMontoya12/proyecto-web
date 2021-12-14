const moment = require('moment')
moment.locale('es')

const helpers = {}

helpers.fecha = (fecha) => {
    const fecha2 = new Date(fecha + 'UTC-5')
    return moment.utc(fecha2).format('ll')
}

helpers.aHora = (segundos) => {
    const horas = (segundos/3600)
    const arrayHoras = horas.toString().split('.')
    var tamanio = 0
    var minutos = 0
    if(arrayHoras[1] != null){
        tamanio = arrayHoras[1].length * (-1)
        minutos = ((parseInt(arrayHoras[1])*Math.pow(10,tamanio))*60)
    }else{
        minutos = '00'
    }
    return arrayHoras[0] + ":" + minutos.toString().split('.')[0]
}

helpers.mayor = (tipos) => {

    var mayor = 0

    for (let index = 0; index < tipos.length; index++) {
        const element = tipos[index];
        
        if(element.id > mayor){
            mayor = element.id
        }
    }
    return mayor+1
}

module.exports = helpers