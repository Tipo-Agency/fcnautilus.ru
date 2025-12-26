import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const IMAGES_DIR = './public/images';
const MAX_SIZE_MB = 2.5; // Максимальный размер в МБ
const QUALITY = 85; // Качество JPEG (85 - хороший баланс)

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = await stat(inputPath);
    const sizeMB = stats.size / (1024 * 1024);
    
    console.log(`Обработка: ${inputPath} (${sizeMB.toFixed(2)} МБ)`);
    
    if (sizeMB <= MAX_SIZE_MB) {
      console.log(`  ✓ Уже оптимальный размер, пропускаем`);
      return;
    }

    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Определяем максимальную ширину в зависимости от размера
    let maxWidth = 1920;
    if (sizeMB > 10) maxWidth = 1600;
    if (sizeMB > 20) maxWidth = 1400;
    
    // Если изображение меньше maxWidth, не увеличиваем
    const width = metadata.width > maxWidth ? maxWidth : metadata.width;
    
    await image
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({
        quality: QUALITY,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    const newStats = await stat(outputPath);
    const newSizeMB = newStats.size / (1024 * 1024);
    const reduction = ((sizeMB - newSizeMB) / sizeMB * 100).toFixed(1);
    
    console.log(`  ✓ Оптимизировано: ${sizeMB.toFixed(2)} МБ → ${newSizeMB.toFixed(2)} МБ (${reduction}% уменьшение)`);
  } catch (error) {
    console.error(`  ✗ Ошибка при обработке ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  try {
    const files = await readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file) && 
      !file.includes('optimized')
    );

    console.log(`Найдено ${imageFiles.length} изображений для оптимизации\n`);

    for (const file of imageFiles) {
      const inputPath = join(IMAGES_DIR, file);
      const outputPath = join(IMAGES_DIR, file.replace(/\.(jpg|jpeg|png)$/i, '.optimized.jpg'));
      
      await optimizeImage(inputPath, outputPath);
    }

    console.log('\n✓ Оптимизация завершена!');
    console.log('Файлы сохранены с суффиксом .optimized.jpg');
    console.log('Проверьте результаты и замените оригинальные файлы при необходимости.');
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

optimizeAllImages();

