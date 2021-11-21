const bcryp = require('bcryptjs')

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

module.exports = helpers