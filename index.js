const express = require('express');

const app = express();

console.log(__dirname + '/build');

app.use(express.static(__dirname + '/build'));

app.listen(3000 || process.env.PORT);