const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

pkg.resolutions = pkg.pnpm.overrides;
// pnpm.patchedDependencies -> where does it go?
// pnpm.onlyBuiltDependencies -> where does it go?

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
