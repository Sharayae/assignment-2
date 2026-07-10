/**
 * Compiles each Pug entry template into a standalone client-side render
 * function. Pug's inlineRuntimeFunctions mode bakes in everything a
 * template needs, so the browser only ever loads the one generated file
 * below - no pug runtime script, no build step at demo time. Shared
 * mixins (src/pug/mixins/*.pug) are pulled in via `include` at compile
 * time, so the same mixin source is reused across every entry template
 * instead of being duplicated by hand.
 *
 * Run with `npm run build` whenever anything under src/pug changes.
 */
const fs = require('fs');
const path = require('path');
const pug = require('pug');

const ROOT = path.join(__dirname, '..');
const PUG_DIR = path.join(ROOT, 'src', 'pug');
const OUT_FILE = path.join(ROOT, 'dist', 'templates.js');

// name the demo/app code will call `templates.<name>(locals)` with -> source file
const ENTRIES = {
  docHeader: 'shared/header.pug',
  docFooter: 'shared/footer.pug',

  wpIntro: 'worker-progress/intro.pug',
  wpReturnToWork: 'worker-progress/return-to-work.pug',
  wpRecovery: 'worker-progress/recovery.pug',
  wpPainScale: 'worker-progress/pain-scale.pug',
  wpMedicalTreatment: 'worker-progress/medical-treatment.pug',
  wpMedication: 'worker-progress/medication.pug',
  wpExercises: 'worker-progress/exercises.pug',
  wpOtherInfo: 'worker-progress/other-info.pug',
  wpDeclarations: 'worker-progress/declarations.pug',

  meIntro: 'medical-expense/intro.pug',
  meCategoryHeader: 'medical-expense/category-header.pug',
  meCategoryRow: 'medical-expense/category-row.pug',
  meTotal: 'medical-expense/total.pug',
  mePrivacy: 'medical-expense/privacy.pug',
};

let out = '// GENERATED FILE - run `npm run build` after editing anything under src/pug. Do not hand-edit.\n';
out += '(function (global) {\n';
out += '  var templates = {};\n\n';

for (const [name, rel] of Object.entries(ENTRIES)) {
  const file = path.join(PUG_DIR, rel);
  const source = fs.readFileSync(file, 'utf8');
  const fnName = 'tpl_' + name;
  const compiled = pug.compileClient(source, {
    filename: file,
    name: fnName,
    compileDebug: false,
    inlineRuntimeFunctions: true,
  });
  // Each compiled template is wrapped in its own IIFE so the runtime
  // helper functions Pug inlines (pug_escape, pug_attr, ...) don't
  // collide with the copies inlined into the other 15 templates.
  out += `  templates.${name} = (function () {\n    ${compiled}\n    return ${fnName};\n  })();\n\n`;
}

out += '  global.templates = templates;\n';
out += '})(window);\n';

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, out);
console.log(`Compiled ${Object.keys(ENTRIES).length} Pug templates -> ${path.relative(ROOT, OUT_FILE)}`);
