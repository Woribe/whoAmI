const express = require('express')
const app = express()
const body = require('body-parser')

app.use(body.json())
app.use(body.urlencoded({extended:false}))
app.use('/static', express.static('public'))

app.set('view engine', 'pug')

let port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.render('landing')
})

app.listen(port, () => {
    console.log('Server is running at ' + port);
})