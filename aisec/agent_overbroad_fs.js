// Excessive Agency (OWASP LLM06) — over-broad storage tool: model-chosen key, wildcard scope.
function readTool(key) { return window.localStorage.getItem(key); }   // SINK (LLM06): any key
function writeTool(key, val) { window.localStorage.setItem(key, val); }
