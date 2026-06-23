// Improper Output Handling FN (OWASP LLM05) — deferred exec; staged then compiled later. MISS.
let staged = '';
function stage(code) { staged = code; }                  // SOURCE: model output persisted
function activate() { return new Function(staged)(); }   // SINK (LLM05 deferred): later executed
