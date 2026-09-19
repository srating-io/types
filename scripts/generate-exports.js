import fs from 'fs';
import path from 'path';

// This file writes the index.ts for me, so I dont have to manually update it
// This script will run during the prebuild step

const srcDir = './src';
const indexFile = path.join(srcDir, 'index.ts');

function getFiles(dir, allFiles = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, allFiles);
    } else if (file.endsWith('.ts') && file !== 'index.ts' && !file.startsWith('_')) {
      // Convert OS-specific paths to web-friendly relative imports
      const relativePath = path.relative(srcDir, filePath)
        .replace(/\\/g, '/'); // Fix Windows backslashes
      
      const moduleName = path.basename(file, '.ts');
      // PascalCase the Namespace (e.g., basketball -> Basketball, coach_statistic_ranking -> CoachStatisticRanking)
      const namespace = moduleName
        .split('_')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');

      allFiles.push(`export * as ${namespace} from './${relativePath}';`);
    }
  });

  return allFiles;
}

const exports = getFiles(srcDir);
fs.writeFileSync(indexFile, `// Auto-generated barrel file\n\n${exports.join('\n')}\n`);
console.log('✅ index.ts successfully auto-generated!');

