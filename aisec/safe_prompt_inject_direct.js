// SAFE mirror.
const SYSTEM = 'You are a support bot.';
function buildPrompt(userQuestion) {
  return { system: SYSTEM, user: '<user_question>' + userQuestion + '</user_question>' };
}
module.exports = { buildPrompt };
