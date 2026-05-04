'use strict';

// CWE-798: hardcoded OAuth credentials
const OAUTH_CLIENT_ID     = 'client_id_1234567890abcdef';
const OAUTH_CLIENT_SECRET = 'client_secret_abcdef1234567890';
const SESSION_SECRET      = 'keyboard_cat';              // CWE-798: weak secret

// CWE-307: no brute-force protection on login
async function login(username, password) {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })     // no rate limiting
    });
    const data = await response.json();

    // CWE-312: auth token stored in localStorage (survives XSS)
    localStorage.setItem('token', data.token);
    localStorage.setItem('refresh_token', data.refresh_token);
    return data;
}

// CWE-327: SHA1 used for sensitive token generation
function generateSessionToken(userId) {
    const CryptoJS = window.CryptoJS;
    const raw = userId + Date.now() + SESSION_SECRET;
    return CryptoJS.SHA1(raw).toString();              // CWE-327: SHA1 broken for security
}

// CWE-614: cookie without Secure flag set client-side
function setAuthCookie(token) {
    document.cookie = `auth=${token}; path=/`;        // CWE-614: missing Secure + HttpOnly
}

// CWE-640: weak password reset — predictable token
function generateResetToken(email) {
    return btoa(email + ':' + Date.now());             // CWE-640: base64 is reversible, not secure
}

// CWE-352: state parameter not validated in OAuth callback
function handleOAuthCallback() {
    const params = new URLSearchParams(window.location.search);
    const code  = params.get('code');
    // CWE-352: 'state' param not checked — CSRF in OAuth flow
    fetch('/api/auth/oauth/callback', {
        method: 'POST',
        body: JSON.stringify({ code, client_secret: OAUTH_CLIENT_SECRET })  // CWE-798
    });
}

// CWE-79: user-supplied redirect_uri reflected into page
function buildOAuthUrl(redirectUri) {
    const url = `https://auth.provider.com/oauth?client_id=${OAUTH_CLIENT_ID}`
              + `&redirect_uri=${redirectUri}`         // CWE-601: unvalidated redirect
              + `&response_type=code`;
    document.getElementById('oauth-link').href = url;
}

// CWE-311: password transmitted without hashing
function changePassword(oldPwd, newPwd) {
    return fetch('/api/auth/password', {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ old_password: oldPwd, new_password: newPwd }) // plaintext
    });
}

// CWE-598: sensitive data in URL query string
function fetchUserData(userId, apiKey) {
    return fetch(`/api/users/${userId}?api_key=${apiKey}&secret=${OAUTH_CLIENT_SECRET}`); // CWE-598
}

module.exports = { login, generateSessionToken, setAuthCookie, handleOAuthCallback };
