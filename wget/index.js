var util = require('util'),
    exec = require('child_process').exec;
    var archiver = require('../archiver')


module.exports=(io,data)=>{

let website ="";
const child = exec(`wget -mkEpnp ${data.website}`);

child.stderr.on("data",(response)=>{

    if(response.startsWith("Resolving "))
    {
        website= response.substring(response.indexOf('Resolve ')+11,response.indexOf(' ('))
    }
    io.emit(data.token,{progress:response})
})

child.stderr.on('close',(response)=>{

    io.emit(data.token,{progress:"Converting"})
    archiver(website,io,data)
})
}