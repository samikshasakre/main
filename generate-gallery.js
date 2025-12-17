import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryPath = path.join(__dirname, 'public', 'gallery');
const outputPath = path.join(__dirname, 'public', 'gallery-data.json');

function scanGallery() {
  const galleryData = {};

  try {
    const folders = fs.readdirSync(galleryPath);

    folders.forEach(folder => {
      const folderPath = path.join(galleryPath, folder);
      const stat = fs.statSync(folderPath);

      if (stat.isDirectory() && !folder.startsWith('.')) {
        const files = fs.readdirSync(folderPath);
        const imageFiles = files.filter(file => {
          const ext = path.extname(file).toLowerCase();
          return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
        });

        galleryData[folder] = imageFiles.map(file => `gallery/${folder}/${file}`);
      }
    });

    fs.writeFileSync(outputPath, JSON.stringify(galleryData, null, 2));
    console.log('✓ Gallery data generated successfully!');
    console.log(`✓ Found ${Object.keys(galleryData).length} folders`);

    let totalImages = 0;
    Object.keys(galleryData).forEach(folder => {
      const count = galleryData[folder].length;
      totalImages += count;
      console.log(`  - ${folder}: ${count} images`);
    });

    console.log(`✓ Total images: ${totalImages}`);

  } catch (error) {
    console.error('Error generating gallery data:', error);
  }
}

scanGallery();
