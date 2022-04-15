// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`)
const express = require('express')
const app = express()

app.listen('3000')

//middleware
app.use(express.json())

let author = 'leonardo'
app.route('/').get((request, response) => response.send(request.query.author))

app.route('/post').post((request, response) => response.send(request.body))

app.route('/put').put((request, response) => {
  ;(author = request.body), response.send(author)
})

app.route('/delete:id').delete((request, response) => {
  ;(author = ''), response.send(request.params.id)
})
