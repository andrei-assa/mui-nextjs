const fs = require('fs');
const path = require('path');

function getViewTemplate({viewName}) {
    const template = `// views/{{viewName}}.tsx
import React from 'react';
import { Typography } from '@mui/material';

const {{viewName}} = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {{viewName}}
      </Typography>
      <Typography paragraph>
        This is the {{viewName}} view.
      </Typography>
      {/* Additional content */}
    </div>
  );
};

export default {{viewName}};
`;
    return template.replace(/{{viewName}}/g, viewName)
}

// Template for the view

function generateExportStatement({viewName}) {
    return `export { default as ${viewName} } from './${viewName}';`;
}

const indexTemplate = `
export {default} from './{{viewName}}'
`;

// Function to generate the new view file from the template
function generateView(viewName) {
    // Replace placeholder with viewName
    const viewsIndexFilePath = path.join(__dirname, '..', 'src', 'views', 'index.tsx')
    const content = getViewTemplate({viewName})
    const indexContent = indexTemplate.replace(/{{viewName}}/g, viewName)
    const exportStatement = generateExportStatement({viewName})

    // Determine the file path
    const targetPath = path.join(__dirname, '..', 'src', 'views', viewName)
    fs.mkdirSync(targetPath, {recursive: true});
    const filePath = path.join(targetPath, `${viewName}.tsx`);
    const indexFilePath = path.join(targetPath, 'index.tsx')

    // Write the file to the views directory
    fs.writeFileSync(filePath, content);
    fs.writeFileSync(indexFilePath, indexContent)
    fs.appendFileSync(viewsIndexFilePath, '\n' + exportStatement)


    console.log(`View created at: ${filePath}`);
    console.log(`index.tsx file created at ${indexFilePath}`)
}

// Get the view name from the command line arguments
const viewName = process.argv[2];

if (!viewName) {
    console.error('Please provide a view name.');
    process.exit(1);
}

// Call the function with the provided view name
generateView(viewName);