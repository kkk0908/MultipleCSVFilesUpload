const express = require('express')
const upload = require('./upload')
const singleUpload = require('./upload')
const cors = require('cors')
const fs = require('fs')
const csv = require('csvtojson');
const server = express()

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))

server.post('/upload', upload)

server.get('/api/getAllFiles', (req, res)=>{
 
  let directory = 'uploads'
  let files = fs.readdirSync(directory)
  res.send(files)
})

server.get('/api/getFileByName/:fileName',(req, res)=>{
  console.log(req.params.fileName)
  try {
    const str = __dirname+ `/uploads/${req.params.fileName}`
   // console.log(str);
    csv().fromFile(str).then(json =>{ 
      //console.log(json);
       res.send(json)})
  } catch (err) {
    res.send(err)
  }
})

server.get('/api/download/:file', function(req, res){
  
  const file = __dirname+`/uploads/${req.params.file}`;
  console.log(file, file+".csv")
  
  res.download(file); 
});

server.post('/api/updateFile', singleUpload)
server.listen(8000, () => {
  console.log('Server started!')
})