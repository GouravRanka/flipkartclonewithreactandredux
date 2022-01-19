import express from 'express';
import Connection from './Database/Db.js';
import gettitle from './UserController/Calls.js';
// var router = express.Router()
import { deletetodo } from './UserController/Calls.js';
import router from './routes/Routes.js'
import { updatetodo } from './UserController/Calls.js';
import { deletealltodo } from './UserController/Calls.js';

import bodyParser from 'body-parser'
const app = express()
const port = 8000
import cors from 'cors'
import {getmytodos} from './UserController/Calls.js'

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.use(express())
app.get('/',(req,res)=>
{
  res.send("har kuch")
  console.log("har ufh")
})


app.post('/addnote', gettitle);
app.delete('/deletealltodo',deletealltodo)


app.get('/gettodo',getmytodos);
app.delete('/:id',deletetodo);
app.put('/edittodo/:id',updatetodo);

// http://localhost:8000/edittodo




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:8000`)
})


Connection();



