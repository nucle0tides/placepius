import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

export default ({ imgPath, width, height }) => {
  return sharp(imgPath).rotate().resize({ width, height, fit: 'cover' });
};
