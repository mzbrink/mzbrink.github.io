# The Monster Mash — wedding site

A simple, password-gated, multi-page static site with a Rankin-Bass /
"Mad Monster Party" monster-prom aesthetic (black, bone-white, and
black-and-white patterns).

## Pages

| File          | Purpose                                            |
| ------------- | -------------------------------------------------- |
| `index.html`  | Password gate / landing page                       |
| `home.html`   | When · Where · Getting there · timeline · RSVP CTA |
| `rsvp.html`   | Links out to your Google Form                      |
| `vibes.html`  | Dress code, color palette, inspiration, photos     |
| `travel.html` | Out-of-towner recommendations                      |
| `gifts.html`  | "No gifts necessary" + four optional funds         |
| `styles.css`  | Shared styles                                      |
| `guard.js`    | The (soft) password gate logic                     |

## ✅ Things only you can fill in

Search the files for `EDIT ME` to find each spot. The checklist:

- [ ] **Password** — currently `graveyardsmash`. To change it: open the live
      site, press **F12** for the console, run `await mmHash('your-password')`,
      and paste the result into `MM_PASSWORD_HASH` in `guard.js`.
- [ ] **RSVP form** — in `rsvp.html`, replace the button's `href="#"` with your
      Google Form link. (Or un-comment the `<iframe>` block to embed it.)
- [ ] **Reply-by date** — `rsvp.html` currently says September 24, 2026.
- [ ] **Gift links** — in `gifts.html`, replace each `href="#"` with your
      fund / registry / Venmo links.
- [ ] **Moodboard** — in `vibes.html`, replace the moodboard button `href="#"`
      with your Pinterest link.
- [ ] **Out-of-towner recs** — fill in the lists in `travel.html`.
- [ ] **Banner art** — drop your illustration in `images/banner.png`, then in
      `home.html` swap the `<div class="banner-fallback">…</div>` for
      `<img class="banner" src="images/banner.png" alt="The Monster Mash">`.
- [ ] **Verify the venue address** — `home.html` lists *154 N 35th St, Seattle*.
      Please confirm it's correct before sharing.

## A note on the password

GitHub Pages is public and static, so the gate is a **soft lock** — it keeps the
site from being casually found or shared, but it is not real security. The
password unlocks the site for the visitor's browser tab via `sessionStorage`.

## Previewing locally

The password check needs a real server (not `file://`). From this folder:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Custom domain (later)

This folder is a staging copy inside `mzbrink.github.io`. When you're happy with
it, it will move into its own repository so a custom domain (e.g.
`themonstermash.party`) can point straight at it. At that point a `CNAME` file
and a few DNS records get added — no changes to the pages themselves.
