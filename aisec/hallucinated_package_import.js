// Provenance/Misinfo (OWASP LLM09) — hallucinated dependency loaded from a fabricated CDN.
// SINK (LLM09): script the model assumed exists; attacker can register the path.
import { build } from 'https://cdn.example.com/hallucinated/http-retry-autogen.js';
export async function fetchUrl(url) { return build({ retries: 3 }).get(url); }
