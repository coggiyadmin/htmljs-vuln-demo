// SAFE mirror (OWASP LLM05) — model output parsed as a number, never executed.
async function runGenerated(task) {
  const out = (await (await fetch('/llm?task=' + encodeURIComponent(task))).text()).trim();
  const n = Number(out);
  if (Number.isNaN(n)) throw new Error('not a number');
  return n;
}
