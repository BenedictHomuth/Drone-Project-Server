//This is backend code
const express = require('express');
const Datastorage = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static(__dirname + '/public'));
app.use(express.json({limit: '1mb'}));

//Here the Database is created
const database = new Datastorage('database.db');
//Here we load the database. If it doesn't exist yet the db will be created
database.loadDatabase();

//This is routing using the 'Express' method
//request is containing whatever the user is sending us
//response is what we want to send back to the user if anything
app.post('/api', (request, response) =>{
    console.log('I got a request!');
    const timestamp = Date.now();
    const data = request.body
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
});

//Now I create a route which sends data from the server to the user
app.get('/api',(request, response) => {
    database.find({},(error, data) => {
        if(error){
            response.end();
            return;
        }
        response.json(data);
    });
});