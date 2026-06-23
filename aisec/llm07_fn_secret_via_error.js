// System-Prompt Leakage FN (OWASP LLM07) — secret leaks inside an error payload. MISS.
function run() { throw new Error('config dump: key=' + window.__BILLING_API_KEY); } // SINK (indirect)
