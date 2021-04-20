import express from 'express';
import path from 'path';
import fs from 'fs';
import edit from './utils/edit';

const port = 3030;
const app = express();
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/:width/:height', (req, res) => {
  const { params } = req;
  const { width, height } = params;
  const imgPath = path.join(__dirname, 'public', 'images', 'placepius.jpeg')
  edit({ imgPath, width: parseInt(width, 10), height: parseInt(height, 10)}).pipe(res);
});

app.get('/g/:width/:height', (req, res) => {
  res.send('Hello, Greyscale!');
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting placepius API');
    console.error(err);
    process.exit();
  }

  console.info(`You can now interact with the API at localhost:${port}`);
});
