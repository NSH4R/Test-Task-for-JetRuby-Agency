const express = require('express')

const PORT = process.env.PORT || 8000

const app = express()

app.get('/', (req, res) => {
    res.send('Test me please !')
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))