// SAFE mirror (OWASP LLM08) — retrieval scoped to the caller's tenant first.
const INDEX = [];
function retrieve(tenant, query) { return INDEX.filter(d => d.tenant === tenant).map(d => d.text); }
