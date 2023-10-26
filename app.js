import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();
// require packages
import express from 'express';

// 👇️ if you use CommonJS
// const express = require('express')

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
export default db;



app.get('/', async (req, res) => {
    let records = await db.collection('records');
    // iterate code goes here
    const allRecords = await records.find().toArray();
    res.send(allRecords)
});

// Server listen
app.listen(3001, () => console.log("Server listening to port 3001"));