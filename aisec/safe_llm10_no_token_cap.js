// SAFE mirror (OWASP LLM10) — input length capped before the call.
async function summarize(userText) {
  if (userText.length > 8000) throw new Error('input too large');
  return fetch('/chat', { method: 'POST', body: JSON.stringify({ text: userText, max_tokens: 512 }) });
}
