// Vector/Embedding Weakness (OWASP LLM08) — untrusted doc embedded unsanitized. TP.
const INDEX = [];
async function ingest(url) { INDEX.push(await (await fetch(url)).text()); } // SINK (LLM08): unsanitized
