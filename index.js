var express = require('express');
var app = express();
var https = require('https');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var fs = require('fs');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/search', function (req,res) {
  console.log(req.body);


    var options = {
        host: 'jira.freewebs.com',
        path: '/rest/api/2/search?jql=project%20=%20SUPPORT%20AND%20text%20~%20"' + encodeURIComponent(req.body.value) + '"',
        headers: {
            Authorization: 'Basic ZWRldGhvcm5lOjRkeDR6eWNoRTQ='
        }
    };

    https.get(options, function(resp){
      console.log("Got response: " + res.statusCode);
      var data = '';

      resp.setEncoding('utf8');
      resp.on('data', function (chunk) {
        data += chunk;
      });
      resp.on('end', function () {
        data = JSON.parse(data);
        var file = fs.readFileSync(__dirname + '/views/ticket.ejs', 'ascii');
        var all = '';
        data.issues.forEach(function (ticket) {
            var rendered = ejs.render(file, { jira: ticket } );
            all += rendered;
        });
        res.send(all);
        res.end();
      });
    })
    .on('error', function (err) {
        console.log(err);
    });
});
app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});