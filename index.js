const express = require('express')

const app = express()
const PORT = process.env.PORT || 8082
app.use(express.json())

app.get('/empleado',(req,res)=>{
    res.send('empleado conseguido!')
})


app.listen(PORT,()=>{
    console.log('server running in port: ',PORT)
})