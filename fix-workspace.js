const fs = require('fs');

const pnpmConfig = JSON.parse(fs.readFileSync('pnpm-config.json', 'utf8'));
let yamlStr = fs.readFileSync('pnpm-workspace.yaml', 'utf8');

if (pnpmConfig.overrides) {
  yamlStr += '\noverrides:\n';
  for (const [k, v] of Object.entries(pnpmConfig.overrides)) {
    yamlStr += `  "${k}": "${v}"\n`;
  }
}

if (pnpmConfig.patchedDependencies) {
  yamlStr += '\npatchedDependencies:\n';
  for (const [k, v] of Object.entries(pnpmConfig.patchedDependencies)) {
    yamlStr += `  "${k}": "${v}"\n`;
  }
}

if (pnpmConfig.onlyBuiltDependencies) {
  // Let's use onlyBuiltDependencies first
  yamlStr += '\nonlyBuiltDependencies:\n';
  for (const item of pnpmConfig.onlyBuiltDependencies) {
    yamlStr += `  - "${item}"\n`;
  }
}

fs.writeFileSync('pnpm-workspace.yaml', yamlStr);
