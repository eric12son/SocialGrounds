# How to update the Social Grounds website

All of the site's text — hours, menu, announcements, news, contact info — lives in
**`content.js`**. You don't need to touch any other file to keep the site up to date.

## Editing from your phone

1. Open **github.com** in your phone's browser and go to this repository.
2. Tap **`content.js`**.
3. Tap the **pencil icon** (Edit).
4. Make your change — only edit text *inside the quotes*.
5. Scroll down and tap **Commit changes**.
6. The live site updates in a minute or two.

Or just ask Claude: *"Add a pumpkin muffin for $3.50 to the menu"* and it will make the edit for you.

## Common updates

| I want to… | Edit this part of `content.js` |
|---|---|
| Post a quick message at the top of the site | `announcement` — change `text`, and change `id` to something new |
| Hide the announcement | `announcement` → `show: false` |
| Change hours / close for a day | `hours` — use `null` for closed |
| Add a menu item | Copy a line inside `items: [ ... ]`, paste below, edit |
| Mark something sold out | Add `soldOut: true` to the item |
| Post news or an event | Add an entry at the top of `news` |
| Add Instagram etc. | Paste the full link into `social` |

## If the site breaks after an edit

Usually a missing comma or quote. The site will show a red bar saying
"Could not load content.js". Open the file's history on GitHub, compare with
the previous version, and fix the line you changed.
