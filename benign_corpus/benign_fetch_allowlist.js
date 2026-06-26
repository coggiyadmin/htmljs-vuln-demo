'use strict';
const ALLOWED = new Set(['api.internal.example.com']);
async function fetchApi(url) {
  const host = new URL(url).hostname;
  if (!ALLOWED.has(host)) throw new Error('host');
  return fetch(url);
}
