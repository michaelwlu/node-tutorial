const express = require('express');
const bodyParser = require('body-parser'); // use body-parser package
const app = express();

//const urlencodedParser = bodyParser.urlencoded({ extended: false }); // create url encoded parser
const urlencodedParser = express.urlencoded({ extended: true });
// Express 4.16+ has native middleware express.urlencoded({ extended: true })

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact', { qs: req.query });
});

app.post('/contact', urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render('contact-success', { data: req.body });
});

app.get('/profile/:name', (req, res) => {
  const data = {
    age: 29,
    job: 'ninja',
    hobbies: ['eating', 'fighting', 'fishing'],
  };

  res.render('profile', { name: req.params.name, data: data });
});

app.listen(3000);
