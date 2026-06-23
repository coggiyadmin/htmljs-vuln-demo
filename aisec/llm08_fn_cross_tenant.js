// Vector/Embedding FN (OWASP LLM08) — shared cache keyed only by query, not tenant. MISS.
const CACHE = {};
function retrieve(tenant, query) {
  if (CACHE[query]) return CACHE[query]; // SINK (LLM08 FN): key omits tenant
  return (CACHE[query] = [tenant + ':' + query]);
}
