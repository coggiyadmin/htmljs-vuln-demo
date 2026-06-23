// Prompt Injection TOOL-OUTPUT (OWASP LLM01) — tool result spliced into the system role.
async function runWithTool(userQ, toolResult) {
  // SINK (LLM01 tool-output)
  const system = 'You are an assistant. Tool said:\n' + toolResult + '\nNow act on it.';
  return fetch('/chat', { method: 'POST', body: JSON.stringify({ system, user: userQ }) });
}
