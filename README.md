# WCB Document Generation — Assignment 2

Builds on [Assignment 1](https://github.com/Sharayae/Diona_Internship_work) (the `co/` Worker Progress Report and `internship/medical-expense/` Medical & Travel Expense Request). Both forms are rebuilt here to satisfy the Assignment 2 brief:

1. **Pug templates** render every piece of the page.
2. Output still mimics the reference WCB Manitoba PDF forms.
3. Data is **simulated as coming from a backend** (`src/data/*.js`) — nothing is typed on screen. Each form ships two sample worker records and a dropdown to switch between them live.
4. Content **prints cleanly to A4 PDF**, with the footer/page-number landing in the right place no matter how much data a record has (a table that grows re-paginates itself; the footer never needs to be nudged by hand).
5. Code is modular — everything repeated (page chrome, checkbox rows, table rows) lives in a **Pug mixin**, and the same header/footer mixin is reused by *both* forms.

## Quick start

```bash
npm install       # installs Pug (the only dependency)
npm run build      # compiles src/pug/**/*.pug -> dist/templates.js
npm run serve       # optional static server at http://localhost:5500
```

Then open `index.html` (or `http://localhost:5500` if you used `npm run serve`) and pick a form. `dist/templates.js` is committed, so you can also just open `index.html` directly in a browser with **no build step** — only re-run `npm run build` after editing anything under `src/pug/`.

Each form page has a **"Simulated backend record"** dropdown (Sample A / Sample B) and a **Print / Save as PDF** button (`window.print()`, styled for A4 via `@media print`).

## How it's put together

```
assignment-2/
├── src/pug/
│   ├── mixins/           document.pug (header+footer, shared by BOTH forms)
│   │                      form-controls.pug (Worker Progress Report atoms)
│   │                      expense-table.pug (Medical Expense table atoms)
│   ├── shared/            header.pug / footer.pug — thin wrappers around the shared mixin
│   ├── worker-progress/   one .pug file per report section (return-to-work, recovery, ...)
│   └── medical-expense/   one .pug file per reusable table piece (category header/row/total/...)
├── scripts/build-templates.js   compiles each entry .pug file into dist/templates.js
├── dist/templates.js            GENERATED — client-side render functions, committed for a zero-build demo
├── src/data/*.data.js            the "backend": two hardcoded sample records per form
├── src/js/paginate.js            generic DOM-measured pagination engine (shared by both forms)
├── src/js/render.js              assembles paginated blocks into A4 .doc-page elements (shared)
├── src/js/*.app.js               per-form wiring: build blocks from data, call the shared engine
├── src/css/shared.css            A4 page shell, header/footer, print rules (shared)
├── src/css/{worker-progress,medical-expense}.css   per-form field/table styling
├── worker-progress-report/index.html
├── medical-travel-expense/index.html
└── index.html                    landing page
```

### Why Pug compiles to client-side functions instead of a server

Assignment 1 was "open an HTML file, no server" — Assignment 2 keeps that. `pug.compileClient()` turns each `.pug` entry file into a self-contained JavaScript function (Pug's `inlineRuntimeFunctions` mode bakes in everything it needs); `scripts/build-templates.js` bundles all 16 of them into `dist/templates.js`. The browser calls `templates.wpReturnToWork({ rtw: data.rtw })` and gets back an HTML string — same idea as a server-side Pug render, just done once at build time instead of per-request.

### Why pagination is measured, not hardcoded

Both forms build a flat list of "blocks" (a section box, a table header, a table row, ...) from whichever dataset is selected, render each block once into a hidden off-screen container at the real A4 content width, and read its actual pixel height (`src/js/paginate.js`). Blocks are then greedily packed onto A4 pages so a page's content never exceeds the space available. This is what makes the footer land correctly regardless of dataset size (requirement #4):

- The **A4 page itself is a fixed-height column flexbox** (`.doc-page` / `.doc-content-wrap` in `shared.css`) with the footer pinned to the true bottom of the box — it never has to be positioned by hand, short or long content.
- The **pagination budget** (how much fits before a new page starts) is measured live from a hidden probe page built with the dataset's real header/footer, not a guessed pixel constant.
- When a table's rows get split across a page boundary (see Medical Expense "Sample B", which has 12 mileage entries), the engine re-renders that category's header with a "(continued)" title on the next page via `getContinuationHeader`, so a reader is never left looking at unlabeled columns.

### Reuse via mixins

- `mixins/document.pug` → `docHeader` / `docFooter`: identical WCB header and footer markup, used by both forms. A branding change (address, phone number) only happens in one file.
- `mixins/form-controls.pug` → `fieldBox`, `optionLine`, `readonlyTextarea`, `inlineField`: every bordered box / checkbox row / read-only field on the Worker Progress Report is one of these four atoms, called with different data.
- `mixins/expense-table.pug` → `categoryHeader`, `categoryRow`: all six expense categories (prescriptions, OTC drugs, supplies, parking, mileage, bus/taxi) share these same two mixins even though each has a different column schema.
- `src/js/paginate.js` + `render.js`: the exact same pagination/render engine is imported by both `worker-progress.app.js` and `medical-expense.app.js` — neither form's JS knows how to lay out an A4 page, they only know how to build their own list of blocks.

## Assumptions

- "No data entry on the screen" was read as: all form fields render read-only (checkboxes are `disabled`, text fields are plain elements, not `<input>`s), and the only interactive control is the dataset dropdown — selecting *which* backend record to view, not typing new data.
- Two sample datasets per form was treated as a minimum, not a cap — the dropdown pattern supports adding more `sampleC`, `sampleD`, ... in the data files without touching any template or JS.
- "Standard A4" was implemented as a literal `210mm × 297mm` page (`@page { size: A4; margin: 0 }`), with the 15mm/12mm inner padding baked into `.doc-content-wrap` rather than the browser's print margin, since browsers apply that margin inconsistently across print-to-PDF implementations.
- A Worker Progress Report "section" (Return to Work, Recovery, Pain Scale, ...) is treated as an atomic pagination block — it doesn't split mid-section even if its text is very long. This matches how the reference PDF is laid out and keeps each block's internal spacing predictable. The Medical Expense tables, in contrast, split row-by-row (with a repeated header) since that's the case the assignment brief calls out explicitly ("footer placement... depending on the size of the data in the tables").

## Challenges

- **A `<textarea>` doesn't grow with its content.** The first version of the read-only comment fields used disabled `<textarea>`s to match the original form's visual style. That gave every comment box the same fixed height regardless of dataset, which silently broke the "pagination adapts to data size" requirement — a long comment never grew a block, so it never pushed anything to a new page, and the whole point of the measurement-based engine was defeated. Fixed by rendering read-only text as a plain auto-sizing element instead (`.field-textbox`, `white-space: pre-wrap`).
- **Table headers not repeating across a page break.** The pagination engine's `keepWithNext` flag only stops a header from being stranded alone at the bottom of a page — it doesn't repeat that header if the table's rows simply overflow onto the next page mid-table. Verified this with Playwright against the 12-row mileage table in Sample B and confirmed page 2 started with unlabeled rows. Fixed by adding `sectionKey` / `isSectionHeader` to each block and a `getContinuationHeader` callback the pagination engine calls whenever a page's first surviving block continues a section whose header already appeared earlier.
- **Reconciling "use Pug" with "no server, no build step to run the demo."** Pug is normally either compiled at build time to static HTML, or rendered per-request by a server. Neither fit "simulate two datasets and switch between them live in the browser." `pug.compileClient()` (compiling each mixin-driven template to a standalone browser function) was the option that kept the original assignment 1 workflow — open an HTML file, everything else is JavaScript — while still genuinely using Pug (not just JS template literals) to produce every element on the page.

## Verifying the print output

`scripts/verify.js` and `scripts/verify-print.js` (Playwright, not a project dependency — `npm install playwright` first) were used during development to screenshot both datasets on both forms and render the actual `@media print` output to PDF, confirming the A4 page size, footer placement, and continuation headers before this was called done.
