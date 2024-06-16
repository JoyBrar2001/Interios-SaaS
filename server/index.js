const express = require('express');
const dotenv = require('dotenv');
const path = require('path')
const PATH = process.env.PATH | 3000;

const testRouter = require('./routes/test.route.js');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/v1/test', testRouter);

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.listen(PATH, () => {
  console.log("Server is listening on port 3000");
});