const express = require('express')

const app = express();

const port = 2222;

app.use(express.static('public'))

const path = require('path')

app.get('/home', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "home.html"))
    
})
app.get('/about', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "about.html"))

})
app.get('/my_portifolio', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "my_portifolio.html"))

})
app.listen(port, ()=>{
    console.log(`The chanllege using node_express is wrorking${port}`);
})