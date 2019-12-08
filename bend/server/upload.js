const IncomingForm = require('formidable').IncomingForm

module.exports = function upload(req, res) {
  var form = new IncomingForm({ uploadDir: __dirname + '/uploads' })

  form.on('file', (field, file) => {
         
  
  })

  form.on('fileBegin', function(name, file) {
    file.path = form.uploadDir + file.name;
  });


  form.on('end', () => {
    res.json()
  })
  form.parse(req)
}

module.exports = function singleUpload(req, res) {
  
  var form = new IncomingForm({ uploadDir: __dirname + '/uploads' })
  
  form.multiples = true

  form.on('files', (field, file) => {
         
  
  })

  form.on('fileBegin', function(name, file) {
    file.path = form.uploadDir + file.name;
  });


  form.on('end', () => {
    res.json()
    
  })
  form.parse(req)
}