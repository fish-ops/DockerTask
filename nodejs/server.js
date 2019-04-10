const http = require('http')

http.createServer((req, res) => {
  res.end('Hello world!')
}).listen(8080, () => {
  console.log('Server is listenning ' + 8080)
})