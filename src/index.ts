const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Home');
});

app.get('/respostas', (req, res) => {
  res.type('application/json');
  res.send({"title": "Respostas"});
});

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
