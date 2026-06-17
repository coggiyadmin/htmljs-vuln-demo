'use strict';
// FN probe — CWE-79 DOM XSS (htmljs category probe; client-side script file).

function renderResults(query) {
  const el = document.getElementById('results');
  el.innerHTML = '<p>You searched for: ' + query + '</p>';
}

const q = new URLSearchParams(location.search).get('q') || '';
renderResults(q);
