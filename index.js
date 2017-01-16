const express = require('express');

const app = express();

console.log('./build');

app.use(express.static('./build'));

app.listen(process.env.PORT || 3000);