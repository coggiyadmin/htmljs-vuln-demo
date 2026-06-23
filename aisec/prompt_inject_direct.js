// Prompt Injection DIRECT (OWASP LLM01).
function buildPrompt(userQuestion) {
  return 'You are a support bot.\n' + userQuestion;
}
module.exports = { buildPrompt };
