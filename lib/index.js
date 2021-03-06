import express from 'express';
import path from 'path';
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
  edit({ width: parseInt(width, 10), height: parseInt(height, 10)}).pipe(res);
});

app.get('/g/:width/:height', (req, res) => {
  const { params } = req;
  const { width, height } = params;
  edit({ isGreyscale: true, width: parseInt(width, 10), height: parseInt(height, 10)}).pipe(res);
});

app.listen(process.env.PORT || port, (err) => {
  if (err) {
    console.error('Error starting placepius API');
    console.error(err);
    process.exit();
  }
});
