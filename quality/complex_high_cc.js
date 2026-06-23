// McCabe HIGH CC.
function classify(a, b, c, kind) {
  if (kind === 'x') {
    if (a > 0) {
      if (b > 0) {
        if (c > 0) return 'xppp';
        return 'xpn';
      }
    }
  }
  return 'default';
}
module.exports = { classify };
