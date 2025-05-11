import express, { json } from 'express'
import cors from 'cors'
import { errorFn } from './errorFunction.js'
// import expressListRoutes from 'express-list-routes'

const port: number = Number(process.env.PORT)

const app = express()
app.use(cors())
app.use(json())

app.get('/', (req, res) => {
    res.send('Welcome to the Express server')
})

app.get('/status', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.post('/echo', (req, res) => {
    res.json({ youSent: req.body })
})

app.get('/error', (req, res) => {
    try {
        errorFn()
    } catch (error) {
        res.json({ error: (error as Error).message })
    }
})

// expressListRoutes(app)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
