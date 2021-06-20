const express = require('express');
const cors = require('cors');
const controllers = require('./controllers/controllers.ts');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Home');
});

app.get('/respostas', controllers.getRespostas);

app.use(express.static(__dirname + '/../public'));

app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not found');
});

app.use((err, req, res, next) => {
  console.error(err.message);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(port, ()=>{
  console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`)
});
