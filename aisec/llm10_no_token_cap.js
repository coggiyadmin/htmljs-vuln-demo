// Unbounded Consumption (OWASP LLM10) — no length cap on a user-driven completion. TP.
async function summarize(userText) {
  return fetch('/chat', { method: 'POST', body: userText }); // SINK (LLM10): unbounded
}
