// Unbounded Consumption (OWASP LLM10) — agent loop with no iteration cap. TP.
async function agent(goal) {
  const history = [goal];
  while (true) { // SINK (LLM10): no max-steps guard
    const msg = await (await fetch('/chat', { method: 'POST', body: goal })).text();
    history.push(msg);
    if (msg.includes('DONE')) return history;
  }
}
