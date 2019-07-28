// Use Express for NodeJS
const express = require('express');

// setup express app
const app = express();

// localhost:4000/api
app.get('/api', function(req,res){
    console.log('GET request');
    // Send string as response
    res.send({ name: 'Yoshi'});
})

// listen for requests
app.listen(4000, function(){
    // Log string to console
    console.log('now listening for requests')
});