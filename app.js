var express = require('express')

var app = express()
app.use(express.static(__dirname))

var messages = [
    {name: 'Sayali', message: 'HI'},
    {name: 'JAne', message: 'HEllo'}
]
app.get('/', (req,res) => {
    res.send(messages)
})

app.post('/messages', (req,res) => {
    console.log(req.body)
    res.sendStatus(200)
})
const port=3000;
app.listen(port,()=> {
    console.log("hello i'm listening to port " +port);
})

