import express from 'express'
import dotenv from 'dotenv'
import connnetDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
import path from 'path'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors())
connnetDB()

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   optionSuccessStatus: 200,
// }

// app.get('/', (req, res) => {
//   res.send('api running')
// })
const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is runnig')
  })
}

app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
