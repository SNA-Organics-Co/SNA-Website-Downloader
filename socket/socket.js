var wget = require('../wget');

module.exports=(io)=>{

    io.on('connection', function (socket) {
        socket.on('request', function (data) {
            console.log("Request connection received %s",data.token) 
            wget(io,data)
        });
      });
}