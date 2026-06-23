// Provenance/Misinfo (OWASP LLM09) — fabricated API usage (hallucinated method). TP.
async function secureToken(seed) {
  // SINK (LLM09): SubtleCrypto has no secureDigest() — invented API presented as real
  return window.crypto.subtle.secureDigest('SHA-256', new TextEncoder().encode(seed));
}
