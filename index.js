// Use Express for NodeJS
const express = require('express');

// setup express app
const app = express();

// Only can accessed via localhost:4000/api
app.get('/api', function(req,res){
    console.log('GET request');
    // Sends string as a response (res)
    res.send({name: 'Yoshi'});
})

// listen for requests
app.listen(4000, function(){
    // Log string to output
    console.log('now listening for requests')
});