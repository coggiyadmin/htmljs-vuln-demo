// Improper Output Handling (OWASP LLM05) — model output assigned to innerHTML (XSS). TP.
function renderAnswer(el, answer) { el.innerHTML = '<div>' + answer + '</div>'; } // SINK (LLM05->XSS)
