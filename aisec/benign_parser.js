// TN — benign parser; trims and drops blank lines.
function parseLines(lines) { return lines.map(l => l.trim()).filter(Boolean); }
