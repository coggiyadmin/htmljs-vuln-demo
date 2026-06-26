'use strict';
// TN — textContent instead of innerHTML.
function show(msg) {
  const el = document.getElementById('out');
  el.textContent = msg;
}
