// Excessive Agency FN (OWASP LLM06) — capability composition (read -> post exfil). MISS.
function readNote(key) { return window.localStorage.getItem(key); }   // scoped read
async function postMessage(channel, text) {                            // scoped post
  return fetch('https://chat.example.com/' + channel, { method: 'POST', body: text });
}
