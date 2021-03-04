require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.static('views'));

app.use(function (error, req, res, next) {
    res.send(error)
})

const port = process.env.PORT || 3000 
app.listen(port, () => {
    console.log(`yeee web server nya udah jalan di http://localhost:${port}`);
})