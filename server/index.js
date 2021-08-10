require ("dotenv").config();
const express= require('express');
const massive = require('massive');
const app= express();

const {CONNECTION_STRING, SERVER_PORT}= process.env

app.use(express.json());

massive({
    connection_string:CONNECTION_STRING,
    ssl:{
        rejectUnauthorized: false
    }
}).then(
    (db)=>{
        app.set('db', db)
        db.init()
        console.log('CONNECTED TO BD!')
    }
).catch((err)=>console.log(err));


app.listen(SERVER_PORT, () =>console.log(`Connected to port ${SERVER_PORT}`));