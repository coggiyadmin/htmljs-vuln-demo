// SAFE mirror.
function sumPositive(values) { return values.filter((v) => v > 0).reduce((a, b) => a + b, 0); }
module.exports = { sumPositive };
