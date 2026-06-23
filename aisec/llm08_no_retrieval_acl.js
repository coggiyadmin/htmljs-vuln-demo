// Vector/Embedding Weakness (OWASP LLM08) — retrieval with no tenant filter. TP.
const INDEX = [];
function retrieve(query) { return INDEX.map(d => d.text); } // SINK (LLM08): no ACL filter
