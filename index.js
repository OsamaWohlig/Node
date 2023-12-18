const app = require('express')()

app.get('/',(req,res)=>{
    console.log('here')
    res.send('here')
})

app.listen(3000,()=>{
    console.log('connecte d')
})