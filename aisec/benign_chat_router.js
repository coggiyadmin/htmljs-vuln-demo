// TN — benign chat router; routes by an internal map, no untrusted text in a prompt.
const HANDLERS = { billing: () => 'Routing to billing.', support: () => 'Routing to support.' };
function route(intent) { return (HANDLERS[intent] || (() => 'unknown'))(); }
