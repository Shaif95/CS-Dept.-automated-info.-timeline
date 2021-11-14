import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connnetDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`MongoDB Connected`)
  } catch (err) {
    console.log(`Error: ${err.message}`)
    process.exit(1)
  }
}

export default connnetDB