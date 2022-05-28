var archiver = require('archiver');
var fs = require('fs');


module.exports= (file,io,data)=>{

    var output = fs.createWriteStream("./public/sites/" +file+ '.zip');
var archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
  io.emit(data.token,{progress:"Completed",file})

});

output.on('end', function() {
  console.log('Data has been drained');
});

archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
  } else {
    throw err;
  }
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);
archive.directory('./'+file,false);
archive.finalize();

 
}