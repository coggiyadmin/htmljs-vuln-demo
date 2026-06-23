// Prompt Injection FN (OWASP LLM01) — delimiter/role-fence break. MISS.
const SYSTEM = 'You are a translator. Translate the user text inside <data> tags.';
async function translate(userText) {
  const fenced = '<data>' + userText + '</data>'; // SINK (LLM01 delimiter break)
  return fetch('/chat', { method: 'POST', body: JSON.stringify({ system: SYSTEM, user: fenced }) });
}
