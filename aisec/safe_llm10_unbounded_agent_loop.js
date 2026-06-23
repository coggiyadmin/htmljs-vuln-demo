// SAFE mirror (OWASP LLM10) — bounded by a hard max-steps budget.
async function agent(goal) {
  const history = [goal];
  for (let i = 0; i < 8; i++) {
    const msg = await (await fetch('/chat', { method: 'POST', body: goal })).text();
    history.push(msg);
    if (msg.includes('DONE')) break;
  }
  return history;
}
