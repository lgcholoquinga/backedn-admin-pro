require('dotenv').config();

const express = require('express');
const cors = require('cors');

//connect database
const  {dbConnection } = require('./database/databaseConfig');
//create server express
const app = express();
dbConnection();
//settings
app.set('port',process.env.PORT);
//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//CORS
app.use(cors());
//routes
app.get('/',(req,res) => {
    res.status(200).send({message:"jejej"})
})

//init server
app.listen(app.get('port'),() => {
    console.log("server inited in port:",app.get('port'));
});
