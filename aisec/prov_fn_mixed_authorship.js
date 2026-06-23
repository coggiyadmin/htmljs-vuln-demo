// Provenance FN (OWASP LLM09) — mixed authorship; localized AI span in a human module. MISS.
function settle(trades) { // human-authored domain logic
  return trades.reduce((net, [side, qty, price]) =>
    net + (side === 'buy' ? qty * price : -qty * price), 0);
}
function processData(data) { // AI-generated span
  const result = [];
  for (const item of data) { result.push(item); }
  return result;
}
export { settle, processData };
