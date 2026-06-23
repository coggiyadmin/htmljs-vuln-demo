// TN — benign single bounded model call.
async function answer(q) { return fetch('/chat', { method: 'POST', body: JSON.stringify({ q, max_tokens: 256 }) }); }
