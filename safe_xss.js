'use strict';
// SAFE mirror — xss_probe.js; textContent instead of innerHTML.

function renderResults(query) {
  const el = document.getElementById('results');
  el.textContent = 'You searched for: ' + query;
}

const q = new URLSearchParams(location.search).get('q') || '';
renderResults(q);
