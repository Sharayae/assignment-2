/**
 * Assembles paginated blocks into `.doc-page` elements and mounts them.
 * Used identically by both the Worker Progress Report and the Medical &
 * Travel Expense Request - it doesn't know anything about either form's
 * content, only about the generic page/header/content/footer shape.
 *
 * Two things make footer placement correct regardless of how much data a
 * dataset has (assignment requirement #4):
 *
 *  1. `.doc-page` is a fixed A4 box (see css/shared.css) laid out as a
 *     column flexbox: header and footer are `flex: 0 0 auto`, the content
 *     area is `flex: 1 1 auto`. That means the footer always sits at the
 *     true bottom of the page, however little or much content precedes it
 *     - we don't need to calculate its position by hand.
 *  2. The *pagination decision* (how many blocks fit before a new page is
 *     needed) still needs a real number for "available content height".
 *     Rather than a hardcoded pixel constant, we measure it live from an
 *     off-screen probe built from this dataset's own header/footer, so the
 *     budget adjusts automatically if header/footer content ever changes
 *     height (e.g. a longer footer date string wrapping to two lines).
 */
(function (global) {
  const SAFETY_MARGIN_PX = 8; // bias conservative so content never clips against .doc-content's overflow:hidden

  function measurePageMetrics(headerHtml, footerHtml) {
    const probe = document.createElement('article');
    probe.className = 'doc-page';
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.left = '-99999px';
    probe.style.top = '0';
    probe.innerHTML = `<div class="doc-content-wrap">${headerHtml}<div class="doc-content"></div>${footerHtml}</div>`;
    document.body.appendChild(probe);

    const contentEl = probe.querySelector('.doc-content');
    const maxContentHeight = contentEl.clientHeight - SAFETY_MARGIN_PX;
    const contentWidth = contentEl.clientWidth;

    document.body.removeChild(probe);
    return { maxContentHeight, contentWidth };
  }

  /**
   * @param {Object} opts
   * @param {HTMLElement} opts.mount - container to render pages into
   * @param {(pageIndex:number, totalPages:number) => string} opts.buildHeader
   * @param {(pageIndex:number, totalPages:number) => string} opts.buildFooter
   * @param {{el: HTMLElement, keepWithNext?: boolean, sectionKey?: string, isSectionHeader?: boolean}[]} opts.blocks
   * @param {(sectionKey: string) => HTMLElement} [opts.getContinuationHeader] - re-renders a section's
   *   header (e.g. with a "(continued)" title) when its rows spill onto a new page
   * @returns {number} total page count
   */
  function renderDocument({ mount, buildHeader, buildFooter, blocks, getContinuationHeader }) {
    const { maxContentHeight, contentWidth } = measurePageMetrics(buildHeader(1, 1), buildFooter(1, 1));
    const pages = WcbPaginate.paginateBlocks(blocks, maxContentHeight, contentWidth, { getContinuationHeader });
    const total = pages.length;

    mount.innerHTML = '';
    pages.forEach((pageBlocks, idx) => {
      const page = document.createElement('article');
      page.className = 'doc-page';

      const wrap = document.createElement('div');
      wrap.className = 'doc-content-wrap';
      wrap.insertAdjacentHTML('beforeend', buildHeader(idx + 1, total));

      const content = document.createElement('div');
      content.className = 'doc-content';
      pageBlocks.forEach((b) => content.appendChild(b.el));
      wrap.appendChild(content);

      wrap.insertAdjacentHTML('beforeend', buildFooter(idx + 1, total));
      page.appendChild(wrap);
      mount.appendChild(page);
    });

    return total;
  }

  global.WcbRender = { renderDocument };
})(window);
