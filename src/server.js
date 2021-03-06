
const path = require('path')
const express = require('express')
const layout = require('express-layout')
const routes = require('./routes')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const middlewares = [
  layout(),
  express.static(path.join(__dirname, 'public')),
  bodyParser.urlencoded()
]
app.use(middlewares)

app.use('/', routes)

app.use((req, res, next) => {
  res.status(404).send("Extinct link :-(")
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Unknown error')
})

app.listen(3000, () => {
  console.log(`App running at http://localhost:3000`)
})
