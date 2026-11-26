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
| `story-list.md` | The 111 planned stories with sources. Single source for titles, ages and types. |
| `content/stories/NNN.js` | One file per written story: Farsi and English text, pages, sounds, sources, questions. |
| `content/catalog.js`, `content/ayat.js` | Generated. Do not edit by hand. |
| `tools/build_catalog.py` | Rebuilds the two generated files. |
| `js/art/` | Pictures, drawn in code (`lib.js` = shared pieces, `scenes.js` and `scenes2.js` = one function per picture). |
| `js/audio.js` | Sounds, synthesised in the browser (no audio files). |
| `js/app.js`, `js/store.js` | The app and the on-device reading log. |
| `js/rec.js` | Family voices: recording a story page by page, playing it back, and children's voice notes. Audio stays in the device's own store (IndexedDB); nothing is uploaded. |
| `tools/ayat.json` | The Qur'an verses the stories quote, as fetched. Add verses here, then rerun the builder. |
| `art-preview.html` | Contact sheet of every picture (`?p=nuh` filters, `?move=1` animates). |

## Rules for stories

1. Nothing invented. Every story is written from the source text, and the passage is kept in the story's `roots` so a parent can check it.
2. Qur'an text is never retyped: it is quoted from `content/ayat.js` with `ay('11:41')` or `cut('11:41', 4, 7)`.
3. In the text, `{{…}}` marks words taken from the source (shown in gold), `[[knock]]` is a sound button, `((…))` is a note for the reader.
4. `roots.ours` says what the storyteller added; `roots.left` says what popular versions have that we left out; `roots.caution` flags a weak or doubted report.
5. Pictures show places, objects, animals and nature only. No holy figures, and nothing the sources do not support.
6. Sounds are natural and environmental only. No instruments.
7. Prophets and Imams are always named with a respectful title in narration: «حضرت نوح (ع)», «پیامبر (ص)», «امام علی (ع)», «حضرت فاطمه (س)». Words quoted from a source inside `{{…}}` stay as the source has them.
8. Where reports differ, follow the Shia sources (al-Kafi, al-Saduq's books, Tafsir al-Qummi, Majma' al-Bayan) and say in `roots` which report each part comes from.
9. English is written for the ten pilot stories and for every story from the fourth batch on (the user asked for it on 2026-11-26). Batches 2 and 3 are Farsi only (they leave out `en`). An English story mirrors the Farsi paragraph for paragraph, and the Qur'an glosses are our own plain translations, not a published one.
10. Length: the short version (ages 3–5) is 1–1½ minutes; the full version is 350–500 words (5–6 minutes). A source that is only a few lines is joined with related verified reports, never padded.
11. Stories marked 6+ or 9+ also carry `more` («بیشتر بدانیم», for the older children): a list of paragraphs shown behind a button on the last page. A line starting with `## ` is a small heading. Same sourcing rules as the story.

## Adding a story

1. Fetch and read the source passages; add any new ayat to the ayat JSON and rerun the tool.
2. Write `content/stories/NNN.js` (copy an existing one).
3. Add the story to `READY` in `tools/build_catalog.py`, then run `python3 tools/build_catalog.py` (it also updates the offline list in `sw.js`). Raise `CACHE` in `sw.js`.

## Deploying

The app is hosted on GitHub Pages from the `main` branch of `skhaligh/qasas`: push to `main` and the site updates in a minute or two. When any file changes, raise the number in `CACHE` in `sw.js` so installed copies pick up the new version.

## Credits

- Qur'an text: Tanzil Project (tanzil.net), "simple" text, quoted unchanged.
- Font: Vazirmatn by Saber Rastikerdar and the Vazirmatn Project Authors, SIL Open Font License 1.1 (see `fonts/LICENSE.md`).
