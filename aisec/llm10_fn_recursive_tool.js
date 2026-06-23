// Unbounded Consumption FN (OWASP LLM10) — recursive tool re-invokes the model. MISS.
async function expand(topic) {
  const sub = await (await fetch('/chat', { method: 'POST', body: 'Sub-topics of ' + topic })).text();
  for (const line of sub.split('\n')) if (line.trim()) await expand(line.trim()); // SINK (recursive)
  return sub;
}
