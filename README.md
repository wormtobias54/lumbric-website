# Lumbric Studios

A static website for Tobias Worm, the solo developer behind Lumbric Studios, built with HTML, CSS, and a little JavaScript. No package install or build step is required.

## Preview

Open `index.html` in a browser, or start a local server from this folder:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then visit <http://127.0.0.1:8000>. Press Ctrl+C in the terminal to stop the server. The server preview also supports the email copy button in browsers that allow clipboard access.

## Update the site

- **Contact email:** change both the `mailto:` link and its visible address in `index.html`. The copy button reads that link automatically.
- **Games:** duplicate a `<article class="game-card">` inside `.game-grid` in `index.html`. Update its title, description, genre, status tag, all three game links, image path, image dimensions, and image alt text. Store new artwork in `assets/games/`.
- **Studio text and social links:** edit `index.html`.
- **Portrait:** the About me section uses `assets/pictures/Tobias.jpg`. Replace that file to change the photo, or edit its image path and alt text in `index.html`.
- **Steam and itch.io:** edit the compact links inside `.game-platforms` in `index.html`. YouTube and TikTok are in `.profile-links` below the About me bio.
- **Studio name:** edit the short `.name-note` inside the About me section.
- **Layout, colors, and typography:** edit `styles.css`.
- **Menu and email copying:** edit `site.js`.

Keep image paths and filenames consistent, including the capital L in `Logos`; many hosts treat capitalization as significant.

## Publish

Use a standard static website host, with this folder as the publish root. Upload `index.html`, `styles.css`, `site.js`, `Logos/`, and `assets/` together. There is no build command and no backend to configure.

Once you choose the public website URL, update `og:image` in `index.html` to the full public URL of `Logos/logo_background.png` for social sharing. A custom domain can be connected later through the chosen host.

## Asset sources

Studio logos were supplied in `Logos/`. Game artwork and project information come from the studio's itch.io pages:

- [Lumbric Studios on itch.io](https://lumbric-studios.itch.io)
- [Kinetic Bounce](https://lumbric-studios.itch.io/kinetic-bounce)
- [Ultimate Tic Tac Toe](https://lumbric-studios.itch.io/ultimate-tic-tac-toe)

Fonts are self-hosted in `assets/fonts/`, so visitors do not need to contact a font service. Both families use the SIL Open Font License 1.1; retain the included license files when publishing or redistributing them:

- [Bricolage Grotesque](https://github.com/ateliertriay/bricolage): `assets/fonts/bricolage-LICENSE.txt`
- [DM Sans](https://github.com/googlefonts/dm-fonts): `assets/fonts/dm-sans-LICENSE.txt`
