import express from "express"
import compression from 'compression'
import cors from 'cors'
import DriverRoutes from './routes/drivers.route'
import loadDriversData from "./controllers/init.controller"
import path from "path"

loadDriversData()
const PORT = 5000
const app = express()

const corstOpts = cors({
    origin: '*',
    credentials: true
})

DriverRoutes(app)
app.use('/static', express.static(path.join(__dirname, '/datasource/static')))
app.use('*', corstOpts)
app.use(compression())

app.listen({ port: PORT }, () =>
  console.log(`Server started on port ${PORT}`)
)