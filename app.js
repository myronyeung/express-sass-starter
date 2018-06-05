const express = require('express');
const app = express();
const path = require('path');

let port = process.env.PORT;

// To serve images
app.use(express.static('public'));

// To serve CSS compiled by Sass
app.use(express.static('build'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/pages/index.html'));
});

app.get('/todos', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/pages/todos/index.html'));
});

// Example of no actual HTML file.
app.get('/hello.html', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

port = port || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));