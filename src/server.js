import express from 'express'
import cors from 'cors'
import listEndpoints from 'express-list-endpoints'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import filesRouter from './services/files/index.js'
import mailRouter from './services/users/index.js'


const server = express()

const port = process.env.PORT || 3001

server.use(cors())
server.use(express.json())

server.use('/files', filesRouter)
server.use('/users', mailRouter)

console.table(listEndpoints(server))

server.listen(port, () => {
    console.log(`server listening on ${port}`)
})