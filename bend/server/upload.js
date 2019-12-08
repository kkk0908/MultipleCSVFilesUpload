const IncomingForm = require('formidable').IncomingForm

module.exports = function upload(req, res) {
  var form = new IncomingForm({ uploadDir: __dirname + '/uploads' })

  form.on('file', (field, file) => {
    
      
      
  
  })
  form.on('end', () => {
    res.json()
  })
  form.parse(req)
}