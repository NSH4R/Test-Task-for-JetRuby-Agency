const db = require('../database')

class RepController {
    async getName(req, res){
        const name = req.params.name
        const repositoryName = await db.query('SELECT * FROM repositories WHERE name = $1;', [name])
        res.json(repositoryName.rows[0])
    }

        async getId(req, res){
            const id = req.params.id
            const repositoryId = await db.query('SELECT * FROM repositories WHERE id = $1;', [id])
            res.json(repositoryId.rows[0])
        }

    async getAll(req, res){
        const repositories = await db.query('SELECT * FROM repositories;')
        res.json(repositories.rows)
    }

    async createRep(req, res){
        const {id, name, url, stars} = req.body
        const newRep = await db.query(`INSERT INTO repositories (id, name, url, stars) values ($1, $2, $3, $4) RETURNING *;`, [id, name, url, stars])
        res.json(newRep.rows[0])
    }

    async updateRep(req, res){
        const {id, name, url, stars} = res.body
        const repUpdate = await db.query('UPDATE repositories set name = $1, url = $2, stars = $3, RETURNING *;', [name, url, stars, id])
        res.json(repUpdate.rows[0])
    }
}

module.exports = new RepController()