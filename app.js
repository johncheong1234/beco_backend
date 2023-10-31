import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import { ValidationOfRomanNumerals } from './utils.js';

const app = express();
app.use(cors()) 

var jsonParser = bodyParser.json()

app.post('/convert',jsonParser, async (req, res) => {
    let { word } = req.body;

    if (ValidationOfRomanNumerals(word)){
        res.send('true')
    }else{
        res.send('false')
    }
})
 

// Server listen
app.listen(3001, () => console.log("Server listening to port 3001"));