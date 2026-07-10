/**
 * Wires the Worker Progress Report page together: builds the flat list of
 * blocks for the currently selected dataset (each block is HTML produced
 * by a Pug template compiled into dist/templates.js), then hands them to
 * the shared pagination/render engine (src/js/paginate.js + render.js).
 * Re-run on every dataset switch - nothing on this page is ever typed
 * into, the "backend" datasets in src/data/worker-progress.data.js are the
 * only source of data.
 */
(function () {
  function toEl(html) {
    const div = document.createElement('div');
    div.innerHTML = html.trim();
    return div.firstElementChild;
  }

  function buildBlocks(data) {
    const blocks = [];
    const push = (html, keepWithNext) => blocks.push({ el: toEl(html), keepWithNext: !!keepWithNext });

    push(templates.wpIntro({ workerName: data.workerName }));
    push(templates.wpReturnToWork({ rtw: data.rtw }));
    push(templates.wpRecovery({ recovery: data.recovery }));
    push(templates.wpPainScale({ painScale: data.painScale }));
    push(templates.wpMedicalTreatment({ mt: data.medicalTreatment }));
    push(templates.wpMedication({ medication: data.medication }));
    push(templates.wpExercises({ exercises: data.exercises }));
    push(templates.wpOtherInfo({ otherInfo: data.otherInfo }));
    push(templates.wpDeclarations({ declarations: data.declarations }));

    return blocks;
  }

  function render(data) {
    const mount = document.getElementById('pages');
    const total = WcbRender.renderDocument({
      mount,
      buildHeader: () => templates.docHeader({ title: 'Worker Progress Report', claimNo: data.claimNo, badgeText: null }),
      buildFooter: (pageIndex, totalPages) =>
        templates.docFooter({
          workerAppId: data.workerAppId,
          submittedDate: data.submittedDate,
          submittedTime: data.submittedTime,
          pageIndex,
          totalPages,
        }),
      blocks: buildBlocks(data),
    });
    document.getElementById('pageCount').textContent = `${total} page${total === 1 ? '' : 's'} generated`;
  }

  function init() {
    const select = document.getElementById('datasetSelect');
    Object.keys(window.WORKER_PROGRESS_DATASETS).forEach((key) => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = window.WORKER_PROGRESS_DATASETS[key].label;
      select.appendChild(opt);
    });

    select.addEventListener('change', () => render(window.WORKER_PROGRESS_DATASETS[select.value]));
    document.getElementById('printBtn').addEventListener('click', () => window.print());

    render(window.WORKER_PROGRESS_DATASETS[select.value]);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
