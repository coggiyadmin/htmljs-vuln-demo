// Improper Output Handling (OWASP LLM05) — model output executed via eval(). TP.
async function runGenerated(task) {
  const code = await (await fetch('/llm?task=' + encodeURIComponent(task))).text();
  return eval(code); // SINK (LLM05): model output executed in the page
}
