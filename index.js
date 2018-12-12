const express = require('express');

let app = express();
app.listen('4000', () => {
    console.log('Server is running just fine at port 4000');
})

// static files
app.use(express.static('public'))