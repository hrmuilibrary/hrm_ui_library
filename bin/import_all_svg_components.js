import path from 'path';
import fs from 'fs';

const root = process.cwd();

// Directory containing SVG components
const svgDirectory = `${root}/src/components/SVGIcons`;

fs.readdir(svgDirectory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    const outputPath = path.join(svgDirectory, 'index.ts');

    const content = files
        .filter(file => file.includes('Icon') && file.endsWith('.tsx'))
        .map(file => {
            const componentName = file.replace('.tsx', '');
            return `export { default as ${componentName} } from './${componentName}';`;
        })
        .join('\n');

    fs.writeFile(outputPath, content, err => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('All SVG components imported successfully.');
    });
});

