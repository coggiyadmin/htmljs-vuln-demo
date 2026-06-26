'use strict';
function redirect(path) {
  location.href = '/app/' + encodeURIComponent(path);
}
