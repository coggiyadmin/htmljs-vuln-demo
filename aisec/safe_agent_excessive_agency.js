// SAFE mirror — allowlisted commands.
const { execFileSync } = require('child_process');
const ALLOW = new Set(['pwd', 'date']);
function shellTool(command) {
  if (!ALLOW.has(command)) throw new Error('not allowed');
  return execFileSync(command, { encoding: 'utf8' });
}
module.exports = { shellTool };
