/* =========================================================
   The Monster Mash — password gate (client-side only)

   NOTE: GitHub Pages is public/static, so this is a SOFT lock.
   It keeps the site from being casually found or shared — it is
   not real security. Anyone determined could read the source.

   ---- TO CHANGE THE PASSWORD ----
   1. Open the live site and press F12 to open the browser console.
   2. Run:   await mmHash('your-new-password')
   3. Copy the long string it prints and paste it below as
      MM_PASSWORD_HASH.
   Passwords are matched case-insensitively (trimmed + lowercased).

   The current placeholder password is:  graveyardsmash
   ================================================================ */

const MM_PASSWORD_HASH =
  '47b11716d98a1ffa3c8872c77b5fb3457707ac21d6d5d8b84be8a419e20e171d';

async function mmHash(str) {
  const data = new TextEncoder().encode(String(str).trim().toLowerCase());
  const buf = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// Returns true (and unlocks the site for this browser tab) on a match.
async function mmTryUnlock(value) {
  const hash = await mmHash(value);
  if (hash === MM_PASSWORD_HASH) {
    sessionStorage.setItem('mm-auth', '1');
    return true;
  }
  return false;
}

// Exposed so you can generate a new hash from the console (see above).
window.mmHash = mmHash;
window.mmTryUnlock = mmTryUnlock;
