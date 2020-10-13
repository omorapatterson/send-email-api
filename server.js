const express = require('express')
var cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

//init middleware first
app.use(require('./middleware/logger'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.options('*', cors());

//routes
app.get('/', (req, res) => {
  res.send('Welcome to ExpressCRUD')
})
app.use('/api/users', require('./routes/api/users'))
app.use('/api/email', require('./routes/api/email'))
app.get('*', (req, res) => {
  res.status(404).send('Not found')
})



//listen on port
app.listen(port, () => console.log(`Listening on ${port}`))
 
