var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title : 'Ariticle One',
        date : 'Dec 14,2018',
        heading : 'First'
    },
    'article-two': {
        title : 'Ariticle two',
        date : 'Dec 17,2018',
        heading : 'Second'
    },
    'article-three': {
        title : 'Ariticle three',
        date : 'Dec 20,2018',
        heading : 'Third'
    }
};

function CreateTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    
    var htmltemplate = ` 
    <html>
        <head>
            <title>
                ${title} | Blank
            </title>
            <meta name="viewport" content="width=device-width , initial-scacle=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <a href="/">Home</a>
                <h2>${heading}</h2>
                <p>${date}</p>
                <h4>This is the content</h4>
            </div>    
        </body>    
    </html>`;
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/:articleName', function (req,res) {
    var articleName = req.params.articleName;
    res.send(CreateTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js',function (req,res) {
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
