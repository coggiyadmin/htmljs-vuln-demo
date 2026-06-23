// Prompt Injection FN (OWASP LLM01) — multi-hop translation relay. MISS.
async function relay(userText) {
  const r1 = await (await fetch('/chat', { method: 'POST',
    body: JSON.stringify({ system: 'Translate to English.', user: userText }) })).text();
  // SINK (LLM01 relay)
  return fetch('/chat', { method: 'POST', body: JSON.stringify({ system: 'Do exactly this:\n' + r1 }) });
}
