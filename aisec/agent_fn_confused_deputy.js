// Excessive Agency FN (OWASP LLM06) — confused deputy: model-chosen URL fetched with an
// ambient credential, no host allowlist (SSRF via tool). Expected: trust layer MISS.
async function fetchTool(url) {
  // SINK (LLM06 confused-deputy)
  return fetch(url, { headers: { Authorization: 'Bearer ' + window.__SERVICE_TOKEN } });
}
