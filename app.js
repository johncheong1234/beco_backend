import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import {
    ValidationOfRomanNumerals,
    romanToDecimal
} from './utils.js';

const app = express();
app.use(cors())

var jsonParser = bodyParser.json()

app.post('/convert', jsonParser, async (req, res) => {
    let { word } = req.body;

    if (ValidationOfRomanNumerals(word)) {
        let romanNumeral = romanToDecimal(word);
        res.send(`${romanNumeral}`)
    } else {
        res.send('not a roman numeral')
    }
})


// Server listen
app.listen(3001, () => console.log("Server listening to port 3001"));