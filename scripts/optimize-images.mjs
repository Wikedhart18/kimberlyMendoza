import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcDir = 'Untitled (1)';
const outDir = 'public/images';
fs.mkdirSync(outDir, { recursive: true });

const rename = {
  'check_circle.png': 'check-circle.webp',
  'Frame 29.png': 'social-icons.webp',
  'Group 1.png': 'logo.webp',
  'Group 11130.png': 'pill-certificados.webp',
  'Group 11131.png': 'pill-videocursos.webp',
  'Group 11132.png': 'pill-audiocursos.webp',
  'Group 11133.png': 'pill-recursos.webp',
  'Group 11134.png': 'pill-entrevistas.webp',
  'Group 11138.png': 'app-of-the-day.webp',
  'Group 22.png': 'icon-sprout.webp',
  'Group 44.png': 'certificate-mockup.webp',
  'Group-1.png': 'icon-badge.webp',
  'Group.png': 'icon-smile.webp',
  'Mask group-1.png': 'phones-categories.webp',
  'Mask group-2.png': 'bg-discover.webp',
  'Mask group-3.png': 'phones-stack.webp',
  'Mask group-4.png': 'john-maxwell.webp',
  'Mask group-5.png': 'hero-bg.webp',
  'Mask group-6.png': 'phones-hero.webp',
  'Mask group.png': 'deco-a.webp',
  'Rectangle 10.png': 'bg-countdown.webp',
  'Rectangle 54.png': 'bg-value.webp',
};

const photoQuality = new Set([
  'john-maxwell.webp',
  'hero-bg.webp',
  'phones-categories.webp',
  'phones-stack.webp',
  'phones-hero.webp',
  'certificate-mockup.webp',
]);

const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.png') && rename[f]);

for (const file of files) {
  const outName = rename[file];
  const input = path.join(srcDir, file);
  const output = path.join(outDir, outName);
  const quality = photoQuality.has(outName) ? 95 : 90;
  await sharp(input).webp({ quality, alphaQuality: 100, effort: 5 }).toFile(output);
  console.log(`${outName} (q${quality})`);
}
