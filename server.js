//Client made by Kevin Rademacher
//Student code 2124312

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/CinemaManager'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname + '/dist/CinemaManager/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);