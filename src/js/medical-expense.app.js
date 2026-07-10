/**
 * Wires the Medical & Travel Expense Request page together. Builds one
 * block per category header and one per row (so the pagination engine can
 * split a long table across pages, repeating the header - see
 * mixins/expense-table.pug), then hands them to the shared render engine.
 * A category with zero rows in the selected dataset is simply omitted.
 */
(function () {
  function toEl(html) {
    const div = document.createElement('div');
    div.innerHTML = html.trim();
    return div.firstElementChild;
  }

  function computeTotal(categories, rows) {
    let total = 0;
    categories.forEach((cat) => {
      if (cat.amountIndex < 0) return;
      (rows[cat.key] || []).forEach((row) => {
        const n = parseFloat(String(row[cat.amountIndex] || '').replace(/[^0-9.]/g, ''));
        if (!isNaN(n)) total += n;
      });
    });
    return total;
  }

  function buildBlocks(data) {
    const blocks = [];
    const push = (html, extra) => blocks.push(Object.assign({ el: toEl(html) }, extra));

    push(templates.meIntro({ workerName: data.workerName }));

    const categories = window.MEDICAL_EXPENSE_CATEGORIES;
    const activeCategories = categories.filter((cat) => (data.rows[cat.key] || []).length > 0);

    activeCategories.forEach((cat) => {
      const rows = data.rows[cat.key];
      // keepWithNext stops a table title/column header from being stranded
      // alone at the bottom of a page; sectionKey/isSectionHeader let the
      // pagination engine re-insert this header (as "(continued)") if the
      // rows below it end up split across a page break.
      push(templates.meCategoryHeader({ title: cat.title, note: cat.note || null, columns: cat.columns }), {
        keepWithNext: true,
        sectionKey: cat.key,
        isSectionHeader: true,
      });
      rows.forEach((row) =>
        push(templates.meCategoryRow({ columns: cat.columns, values: row }), { sectionKey: cat.key })
      );
    });

    if (activeCategories.some((cat) => cat.amountIndex >= 0)) {
      push(templates.meTotal({ total: computeTotal(categories, data.rows) }));
    }

    push(templates.mePrivacy({ checked: !!data.privacyAcknowledged }));

    return blocks;
  }

  function continuationHeaderFor(sectionKey) {
    const cat = window.MEDICAL_EXPENSE_CATEGORIES.find((c) => c.key === sectionKey);
    return toEl(templates.meCategoryHeader({ title: `${cat.title} (continued)`, note: null, columns: cat.columns }));
  }

  function render(data) {
    const mount = document.getElementById('pages');
    const total = WcbRender.renderDocument({
      mount,
      buildHeader: () =>
        templates.docHeader({ title: 'Medical & Travel Expense Request', claimNo: data.claimNo, badgeText: null }),
      buildFooter: (pageIndex, totalPages) =>
        templates.docFooter({
          workerAppId: data.workerAppId,
          submittedDate: data.submittedDate,
          submittedTime: data.submittedTime,
          pageIndex,
          totalPages,
        }),
      blocks: buildBlocks(data),
      getContinuationHeader: continuationHeaderFor,
    });
    document.getElementById('pageCount').textContent = `${total} page${total === 1 ? '' : 's'} generated`;
  }

  function init() {
    const select = document.getElementById('datasetSelect');
    Object.keys(window.MEDICAL_EXPENSE_DATASETS).forEach((key) => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = window.MEDICAL_EXPENSE_DATASETS[key].label;
      select.appendChild(opt);
    });

    select.addEventListener('change', () => render(window.MEDICAL_EXPENSE_DATASETS[select.value]));
    document.getElementById('printBtn').addEventListener('click', () => window.print());

    render(window.MEDICAL_EXPENSE_DATASETS[select.value]);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
