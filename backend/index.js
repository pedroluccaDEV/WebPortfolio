const app = require('express')
const consign = require('consign')

const PORT = 8081

consign()
    .include('./config/passport.js')
    .then('.config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(PORT, () => {
    console.log(`Backend running PORT:${PORT}`)
})