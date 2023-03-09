const { Router } = require('express')
const { check } = require('express-validator')
const { validarJWT } = require('../middlewares/validar-jwt')
const { validarCampos } = require('../middlewares/validar-campos')
const {
  obtenerEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento
} = require('../controllers/events')
const { isDate } = require('../helpers/isDate')

const router = Router()
//* Todas las rutas quedan protegidas
router.use(validarJWT)

//* CRUD
//* Obtener eventos
router.get('/', obtenerEventos)
router.post(
  '/',
  [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio es obligatoria').custom(isDate),
    check('end', 'La fecha de finalización es obligatoria').custom(isDate),
    validarCampos
  ],
  crearEvento
)
router.put('/:id', actualizarEvento)
router.delete('/:id', eliminarEvento)

module.exports = router
