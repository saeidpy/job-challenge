import * as express from 'express'

const app = express()

/**
 * The NX front-end app
 */
app.get('/api', (req, res) => {
  res.send('hello world')
})

app.listen(3333, () => console.log('the recipe-search-backend has started!'))
