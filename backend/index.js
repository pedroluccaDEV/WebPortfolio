const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

const PORT = 8081

app.db = db

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(PORT, () => {
    console.log(`Servidor Backend rodando na porta ${PORT}`)
})
