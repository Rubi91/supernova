var express = require('express');
var app = express();


// línea necesaria para poder servir recursos desde nuestro HTML:

app.use('/node_modules', express.static('node_modules') );
//Primer Forma
app.use(express.static('src'));


app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.sendFile( __dirname + '/src/index.html' )

});

app.get('/adios', function (req, res) {
  res.send('Adios Mundo!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
