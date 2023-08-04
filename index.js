const express = require('express')
const repositoryRouter = require('./routes/repositoryRoutes')
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use('/api', repositoryRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))