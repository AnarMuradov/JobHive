import express from 'express'
import mongoose from 'mongoose';
import { Schema } from 'mongoose';
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())


const vacancySchema = new Schema({
    category:String,
    position:String,
    region:String,
    age:String,
    education:String,
    experience:String,
    requirements:String,
    description:String,
    company:String,
    contact:String,
    date:{
        type:Date,default:Date.now
    }

  });

const vacancyModel = mongoose.model('Vacancy', vacancySchema);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.post('/', (req, res) => {
    res.send('Got a POST request')
  })
  
  app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })
  
  app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

  
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})