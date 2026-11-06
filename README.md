# JinxSampleProj

**Undercity Archive** is an editable Jinx fan dossier with three decks of illustrated-world trivia covering Jinx, her gear, and the making of Arcane.

## Open the demo

Download the repository using **Code → Download ZIP**, extract the folder, and open `index.html` in your browser. The site runs offline using plain HTML, CSS, and JavaScript.

## Where to edit

| File | What it controls |
| --- | --- |
| `index.html` | Page headings, introductory text, navigation labels, and image description |
| `style.css` | Colors, type, spacing, cards, and the mobile layout |
| `notes.js` | Trivia cards, category selection, and the **Flip the file** button |
| `jinx.png` | Cover artwork |

## Add a trivia card

Open `notes.js` and find the category you want in the `files` list. Copy an existing card inside that category. Edit the first quoted line for the heading and the second for the fact. Separate neighboring cards with a comma. The card counter updates automatically.

The categories follow the navigation order in `index.html`: Jinx files, The armory, Behind Arcane. Keep at least one card in each deck. After editing, select each category and flip past its last card to check that it returns to the first.

## Change the look

Start with `--pink` and `--mint` near the top of `style.css`. The mobile rules are near the bottom. Check both a narrow phone-sized window and a wide one after changing spacing or artwork.

To replace the cover, save your image as `jinx.png` or update the image filename in `index.html`. Update its alt text to describe your new image.

## Hosting and artwork

The original demo was published separately through Sites. Edits committed here update this source copy. Redeploy through your chosen host to show those edits on a live website.

This is an unofficial fan project. The cover image was supplied for the demo. Before reusing it elsewhere, check its original credit and usage terms or replace it with artwork you have permission to use.
