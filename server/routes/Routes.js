import express from 'express';
var router = express.Router()

import bodyParser from 'body-parser'
import cors from 'cors'


import gettitle from '../UserController/Calls.js'
import {getmytodos} from '../UserController/Calls.js'
import {deletetodo} from '../UserController/Calls.js'



// define the home page route
router.get('/' ,(req,res)=>
{
    res.send("hari om hai");
    console.log("contqcti")
})
router.get('/addnote', (req,res)=>
{
    res.send("hari om nhi hasi")
})
router.delete('/delete',deletetodo)
router.post('/addnote', gettitle)
router.get('/mytodos',getmytodos)

export default router;