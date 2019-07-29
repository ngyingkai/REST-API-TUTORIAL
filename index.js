// Use Express for NodeJS
const express = require('express');

// setup express app
const app = express();

// initialize routes
app.use('/api',require('./routes/api'));

// listen for requests
app.listen(process.env.port || 4000, function(){
    // Log string to console
    console.log('now listening for requests')
});