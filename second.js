var express = require('express')
var app = express()

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))

app.post('/submit', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.send(`Welcome ${name}`)
    }

    return res.send('please enter name')
})

app.listen(5000)