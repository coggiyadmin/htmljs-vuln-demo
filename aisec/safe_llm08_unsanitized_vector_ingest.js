// SAFE mirror (OWASP LLM08) — sanitized + size-bounded per tenant.
const INDEX = {};
function ingest(tenant, text) {
  const clean = text.replace(/\x00/g, '').slice(0, 20000);
  (INDEX[tenant] = INDEX[tenant] || []).push(clean);
}
