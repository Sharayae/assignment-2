/**
 * Generic, DOM-measured pagination engine shared by both WCB forms.
 *
 * Each form builds a flat list of "blocks" (a section box, a heading, a
 * table row, ...). We don't know a block's rendered height ahead of time
 * because it depends on the dataset - a long comment or a table with many
 * rows is taller than a short one - so instead of hardcoding page breaks
 * we:
 *
 *   1. Render every block once into a hidden measuring container that has
 *      the exact width of the real page content area (so line wrapping is
 *      identical to the final layout).
 *   2. Read each block's rendered height (offsetHeight).
 *   3. Greedily bin-pack the blocks into pages so a page's content never
 *      exceeds the usable content height passed in.
 *   4. Move (not clone) the real DOM nodes into their assigned page once
 *      the split is known, so no work is done twice.
 *
 * A block may set `keepWithNext: true` (e.g. a table's header row) so it's
 * never stranded alone at the bottom of a page with its content pushed to
 * the next one.
 *
 * A block may also carry `sectionKey` (grouping it with the other blocks of
 * the same table/section) and `isSectionHeader` (true for that section's
 * own header block). When a section's rows get split by a page break, the
 * optional `getContinuationHeader(sectionKey)` callback is used to render
 * and re-insert that section's header - with a "(continued)" title - at the
 * top of the next page, so a reader never lands on unlabeled table rows.
 */
(function (global) {
  function measureHeights(elements, contentWidth) {
    const measureRoot = document.createElement('div');
    measureRoot.style.position = 'absolute';
    measureRoot.style.visibility = 'hidden';
    measureRoot.style.pointerEvents = 'none';
    measureRoot.style.left = '-99999px';
    measureRoot.style.top = '0';
    measureRoot.style.width = contentWidth + 'px';
    document.body.appendChild(measureRoot);
    elements.forEach((el) => measureRoot.appendChild(el));

    const heights = elements.map((el) => el.offsetHeight);

    elements.forEach((el) => measureRoot.removeChild(el));
    document.body.removeChild(measureRoot);
    return heights;
  }

  function paginateBlocks(blocks, maxContentHeight, contentWidth, options) {
    if (!blocks.length) return [[]];
    const getContinuationHeader = options && options.getContinuationHeader;

    const heights = measureHeights(
      blocks.map((b) => b.el),
      contentWidth
    );

    const pages = [];
    let current = [];
    let currentHeight = 0;
    const sectionsStarted = new Set();

    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      const h = heights[i];
      let requiredHeight = h;

      if (block.keepWithNext && i + 1 < blocks.length) {
        requiredHeight += heights[i + 1];
      }

      if (current.length > 0 && currentHeight + requiredHeight > maxContentHeight) {
        pages.push(current);
        current = [];
        currentHeight = 0;
      }

      // A fresh page whose first surviving block is a mid-section row (its
      // section's header already appeared on an earlier page) needs that
      // header repeated so the column labels aren't lost.
      if (
        current.length === 0 &&
        pages.length > 0 &&
        block.sectionKey &&
        !block.isSectionHeader &&
        sectionsStarted.has(block.sectionKey) &&
        getContinuationHeader
      ) {
        const headerEl = getContinuationHeader(block.sectionKey);
        const [headerHeight] = measureHeights([headerEl], contentWidth);
        current.push({ el: headerEl });
        currentHeight += headerHeight;
      }

      if (block.isSectionHeader && block.sectionKey) {
        sectionsStarted.add(block.sectionKey);
      }

      current.push(block);
      currentHeight += h;
    }

    if (current.length) pages.push(current);
    return pages;
  }

  global.WcbPaginate = { paginateBlocks };
})(window);
