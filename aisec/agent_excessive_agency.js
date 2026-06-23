// Excessive Agency (OWASP LLM06).
const { execSync } = require('child_process');
function shellTool(command) { return execSync(command, { encoding: 'utf8' }); }
module.exports = { shellTool };
