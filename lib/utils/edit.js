import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

// super naieve, but we'll go with this for now
const cache = {};

const getImage = () => {
  const files = fs.readdirSync(path.join(__dirname, '..', '..', 'public', 'images'));
  const idx = Math.floor(Math.random() * files.length);
  const imgPath = path.join(__dirname, '..', '..', 'public', 'images', files[idx]);
  return imgPath;
};

export default ({ width, height, isGreyscale = false }) => {
  const key = `${width}x${height}`;

  const img = cache[key] ? cache[key] : getImage();

  cache[key] = img;
  return sharp(img).rotate().greyscale(isGreyscale).resize({ width, height, fit: 'cover' });
};
