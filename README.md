# قصص (Qasas)

A private, offline story companion: a parent reads grounded stories from the Qur'an and the lives of the prophets and Imams to their children, with pictures, ambient sound and a reading log. The app never narrates; the parent is the reader.

## Run it

No build step and no dependencies. Serve the folder and open it:

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173. To install it on a phone or tablet (and use it offline) it must be served over https from a real host.

## What is where

| Path | What |
|---|---|
| `story-list.md` | The 110 planned stories with sources. Single source for titles, ages and types. |
| `content/stories/NNN.js` | One file per written story: Farsi and English text, pages, sounds, sources, questions. |
| `content/catalog.js`, `content/ayat.js` | Generated. Do not edit by hand. |
| `tools/build_catalog.py` | Rebuilds the two generated files. |
| `js/art/` | Pictures, drawn in code (`lib.js` = shared pieces, `scenes.js` = one function per picture). |
| `js/audio.js` | Sounds, synthesised in the browser (no audio files). |
| `js/app.js`, `js/store.js` | The app and the on-device reading log. |
| `art-preview.html` | Contact sheet of every picture (`?p=nuh` filters, `?move=1` animates). |

## Rules for stories

1. Nothing invented. Every story is written from the source text, and the passage is kept in the story's `roots` so a parent can check it.
2. Qur'an text is never retyped: it is quoted from `content/ayat.js` with `ay('11:41')` or `cut('11:41', 4, 7)`.
3. In the text, `{{…}}` marks words taken from the source (shown in gold), `[[knock]]` is a sound button, `((…))` is a note for the reader.
4. `roots.ours` says what the storyteller added; `roots.left` says what popular versions have that we left out; `roots.caution` flags a weak or doubted report.
5. Pictures show places, objects, animals and nature only. No holy figures, and nothing the sources do not support.
6. Sounds are natural and environmental only. No instruments.

## Adding a story

1. Fetch and read the source passages; add any new ayat to the ayat JSON and rerun the tool.
2. Write `content/stories/NNN.js` (copy an existing one).
3. Add the story to `READY` in `tools/build_catalog.py` and to the list in `sw.js`, then run `python3 tools/build_catalog.py`.

## Deploying

The app is hosted on GitHub Pages from the `main` branch of `skhaligh/qasas`: push to `main` and the site updates in a minute or two. When any file changes, raise the number in `CACHE` in `sw.js` so installed copies pick up the new version.

## Credits

- Qur'an text: Tanzil Project (tanzil.net), "simple" text, quoted unchanged.
- Font: Vazirmatn by Saber Rastikerdar and the Vazirmatn Project Authors, SIL Open Font License 1.1 (see `fonts/LICENSE.md`).
