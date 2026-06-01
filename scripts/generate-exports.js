import fs from 'fs';
import path from 'path';

// This file writes the index.ts for me, so I dont have to manually update it
// This script will run during the prebuild step

const srcDir = './src';
const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.ts') && file !== 'index.ts');

const exportsLines = files.map(file => {
  const moduleName = path.basename(file, '.ts');
  // Capitalize the first letter for the Namespace (e.g., basketball -> Basketball)
  const namespace = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
  return `export * as ${namespace} from './${moduleName}.ts';`;
});

fs.writeFileSync(path.join(srcDir, 'index.ts'), exportsLines.join('\n') + '\n');
console.log('✅ index.ts successfully auto-generated!');


