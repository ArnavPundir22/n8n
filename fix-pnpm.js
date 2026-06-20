const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

pkg.resolutions = pkg.pnpm.overrides;
pkg.pnpm.patchedDependencies = pkg.pnpm.patchedDependencies; // Wait, maybe top-level patchedDependencies?
