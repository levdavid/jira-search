var express = require('express');
var app = express();
var https = require('https');
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));

var options = {
    host: 'jira.freewebs.com',
    path: '/rest/api/2/issue/DG-2079',
    headers: {
        Authorization: 'Basic dG9vbHM6cXdlcnR5Nw=='
    }
};

https.get(options, function(res){
    console.log("Got response: " + res.statusCode);
    var data = '';

  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    data += chunk;
  });
  res.on('end', function () {
    
    app.locals.jira = JSON.parse(data);
  });
})
.on('error', function (err) {
    console.log(err);
});

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/search', function (req,res) {
    console.log(req.body);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});