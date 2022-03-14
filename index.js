const app = require('./server')
const port = 3000

app.listen(port, () => {
    console.log(`Example app listenig at http://localhost:${port}`)
})