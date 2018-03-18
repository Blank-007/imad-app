var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool =require('pg').Pool;

var config = {
    user : 'mvabhinav1998',
    database : 'mvabhinav1998',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD
};



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
var pool = new Pool(config);
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

app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM test',function (err,result){
       if(err){
           res.status(500).send(err.toString());
       } 
       else{
           res.send(JSON.stringify(result));
       }
    });
});

var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});
var names=[];
app.get('/submit-name', function (req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
app.get('/articles/:articleName', function (req,res) {
    var articleName = req.params.articleName;
    pool.query("SELECT * FROM article WHERE title = '"+req.params.articleName + "'" ,function (err,result){
       if(err){
           res.status(500).send(err.toString());
       } 
       else{
           if(result.rows.length === 0 ){
               res.status(404).send('Article Not Found');
           }else{
               var articleData = result.row[0];
                   res.send(CreateTemplate(articleData));
           }
       }
    });

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
