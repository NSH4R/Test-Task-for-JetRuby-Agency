const Router = require('express')
const router = new Router
const RepController = require('../controller/repositoryContr')
const timer = require('../app/timer')

router.get('/repositories/name/:name', RepController.getName)
router.get('/repositories/id/:id', RepController.getId)
router.post('/repositories', RepController.createRep)
router.get('/repositories', RepController.getAll)
router.post('/repositories/sync',timer.syncData)

module.exports = router