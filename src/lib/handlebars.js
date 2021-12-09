const moment = require('moment')
moment.locale('es')

const helpers = {}

helpers.fecha = (fecha) => {
    const fecha2 = new Date(fecha + 'UTC-5')
    return moment.utc(fecha2).format('ll')
}

module.exports = helpers