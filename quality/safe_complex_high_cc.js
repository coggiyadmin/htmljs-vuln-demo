// SAFE mirror.
function classify(a, kind) {
  if (kind === 'x') return a > 0 ? 'xp' : 'xn';
  return 'default';
}
module.exports = { classify };
