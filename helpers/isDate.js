const { isValid } = require('date-fns')

const isDate = (value) => {
  if (!value) return false

  const fecha = isValid(value)
  if (fecha) return true
  else return false
}

module.exports = { isDate }
