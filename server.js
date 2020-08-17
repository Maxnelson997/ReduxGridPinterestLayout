const express = require('express');

const app = express();

require('./api/routes/photoRoutes')(app);

if(process.env.NODE_ENV == 'production') {
    app.use(express.static(__dirname + '/dist/'))
    app.get('/.*/', (req, res) => {
        res.sendFile(__dirname + '/dist/index.html');
    })
}

const PORT = process.env.PORT || 8080;
app.listen(PORT);

console.log('server up');
