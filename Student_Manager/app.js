const express = require('express')
const app = express()
const cpmpression = require('compression')
const compression = require('compression')

app.use(compression()) // gzip网络压缩
app.use(express.static('./dist'))

app.listen(80,()=>{
    console.log('server running at http://localhost')
})