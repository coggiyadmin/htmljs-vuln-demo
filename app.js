'use strict';

// CWE-798: hardcoded API credentials
const API_KEY      = 'sk_live_51HG3mKLkj2hd8sP9qRtN2xCvB7mZ3aW';
const API_SECRET   = 'whsec_8f3d2a1b9e6c4f7a0d5e2b8c1f4a7d0e';
const STRIPE_KEY   = 'pk_live_AaBbCcDdEeFfGgHhIiJjKkLlMmNnOo';
const SENDGRID_KEY = 'SG.abcdefghijklmnop.QRSTUVWXYZ1234567890abcdefghijklmnop';

// CWE-502: unsafe deserialization — eval of server-provided JSON string
function loadUserPreferences(encodedPrefs) {
    const prefs = eval('(' + encodedPrefs + ')');   // CWE-502 + CWE-95
    return prefs;
}

// CWE-79: XSS — building HTML via string concatenation
function renderUserProfile(user) {
    const html = '<div class="profile">'
        + '<h2>' + user.name + '</h2>'              // CWE-79: unescaped
        + '<p>' + user.bio + '</p>'
        + '<img src="' + user.avatar + '">'
        + '</div>';
    document.body.innerHTML += html;
}

// CWE-915: prototype pollution via recursive merge
function mergeConfig(target, source) {
    for (const key in source) {
        if (typeof source[key] === 'object') {
            mergeConfig(target[key], source[key]);  // CWE-915: __proto__ pollution
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

// CWE-327: weak hash — MD5 for password
function hashPassword(password) {
    const CryptoJS = window.CryptoJS;
    return CryptoJS.MD5(password).toString();       // CWE-327: MD5 is cryptographically broken
}

// CWE-312: sensitive data stored in localStorage
function cacheSession(token, userId, creditCard) {
    localStorage.setItem('auth_token', token);      // CWE-312: token in localStorage
    localStorage.setItem('user_id', userId);
    localStorage.setItem('cc_number', creditCard);  // CWE-312: PII in localStorage
}

// CWE-89: SQL injection via string concatenation (server-side JS / Node)
function buildQuery(username) {
    return "SELECT * FROM users WHERE username = '" + username + "'";  // CWE-89
}

// CWE-95: code injection — new Function with user input
function runCustomScript(userCode) {
    const fn = new Function('data', userCode);      // CWE-95: arbitrary code execution
    return fn({ secret: API_SECRET });
}

// CWE-601: open redirect without allowlist
function redirectAfterLogin(returnUrl) {
    window.location.href = returnUrl;               // CWE-601: no validation
}

// CWE-798: hardcoded JWT secret used for verification
function verifyToken(token) {
    const JWT_SECRET = 'my-super-secret-jwt-key-do-not-share';  // CWE-798
    return atob(token.split('.')[1]);               // no signature verification
}

// CWE-359: PII logged to console / external service
function logUserAction(user, action) {
    console.log('User action:', user.email, user.ssn, action);  // CWE-359: PII in logs
    fetch('https://analytics.example.com/track', {
        method: 'POST',
        body: JSON.stringify({ email: user.email, ssn: user.ssn, action })
    });
}

module.exports = { loadUserPreferences, buildQuery, hashPassword, cacheSession };
