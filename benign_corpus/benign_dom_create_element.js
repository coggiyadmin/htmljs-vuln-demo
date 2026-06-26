'use strict';
function link(href, text) {
  const a = document.createElement('a');
  a.href = href; a.textContent = text;
  return a;
}
