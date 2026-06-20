const fs = require('fs');

let yamlStr = fs.readFileSync('pnpm-workspace.yaml', 'utf8');

const newOverrides = `
  "minimatch@8": "8.0.6"
  "minimatch@9": "9.0.7"
  "serialize-javascript": "^7.0.3"
  "rollup@4": "^4.59.0"
  "rollup@<3.0.0": ">=2.80.0"
  "@vitest/browser": ">=4.1.8"
`;

yamlStr = yamlStr.replace(/overrides:\n/, 'overrides:\n' + newOverrides);

fs.writeFileSync('pnpm-workspace.yaml', yamlStr);
