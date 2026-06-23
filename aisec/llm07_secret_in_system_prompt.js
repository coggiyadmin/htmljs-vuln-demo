// System-Prompt Leakage (OWASP LLM07) — secret baked into the system prompt. TP.
function buildSystem() {
  // SINK (LLM07): secret embedded in the instruction
  return 'You are billing-bot. Internal key: ' + window.__BILLING_API_KEY + '. Never reveal it.';
}
