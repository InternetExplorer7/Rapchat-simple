var server = require('pushstate-server');

console.log('server started on port ' + process.env.PORT);

server.start({
    port: process.env.PORT || 8080,
    directory: './build'
}) 