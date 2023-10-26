import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import express from 'express';
import bodyParser from "body-parser";
dotenv.config();

const app = express();

const connectionString = process.env.MONGODB_URI || "";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db("beco");
var jsonParser = bodyParser.json()

app.get('/', async (req, res) => {
    let records = await db.collection('records');
    const allRecords = await records.find({
        date: { $gte: new Date('2023-10-01T18:00:00.000Z'), 
                $lte: new Date('2023-10-04T18:00:00.000Z') } 
    }).toArray();
    res.send(allRecords)
});

app.post('/records',jsonParser, async (req, res) => {
    let data = req.body;
    let records = await db.collection('records');
    const allRecords = await records.find(
        data
    ).toArray();
    res.send(allRecords)
})
 

// Server listen
app.listen(3001, () => console.log("Server listening to port 3001"));