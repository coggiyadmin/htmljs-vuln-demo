// SAFE mirror (OWASP LLM06) — storage tool restricted to a declared key prefix allowlist.
const ALLOWED = 'app:tool:';
function readTool(key) {
  if (!key.startsWith(ALLOWED)) throw new Error('key out of scope');
  return window.localStorage.getItem(key);
}
