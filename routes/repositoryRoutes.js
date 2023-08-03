const Router = require('express')
const router = new Router
const RepController = require('../controller/repositoryContr')

router.get('/repositories/name/:name', RepController.getName)
router.get('/repositories/id/:id', RepController.getId)
router.post('/repositories', RepController.createRep)
router.get('/repositories', RepController.getAll)
router.put('/repositories/id/:id', RepController.updateRep )

module.exports = router