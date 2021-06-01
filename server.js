const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());

app.get('/', (req, res) => {
  fs.readFile('db.json', (err, data) => {
    if (err) throw err;
    let db = JSON.parse(data);
    return res.json(db);
  });
});

app.listen('1337');