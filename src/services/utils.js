const utils = {
  /**
   * Get nested object values or return undefined
   */
  getNested(object, ...keys) {
    return keys.reduce((a, b) => (a || {})[b], object) !== undefined;
  },

  updateMenu(routeName) {
    const headerBlock = document.querySelector('header-block');
    const anchorTag = headerBlock.root.querySelector(
      `a[href='/#${routeName}']`
    );
    headerBlock.updateMenuDisplay(anchorTag);
  },

  injectCss(path) {
    if (document.querySelector(`link[href='${path}']`)) {
      // Exit if it already exists on the document
      return;
    }

    document.querySelector(
      'head'
    ).innerHTML += `<link rel="stylesheet" href="${path}" type="text/css"/>`;
  },

  async getPage(pageName) {
    const page = await fetch(`./views/pages/${pageName}/${pageName}.html`);
    const view = await page.text();
    return view;
  },

  handleError(err) {
    console.warn(err);
    return new Response(
      JSON.stringify({
        code: 400,
        message: 'Stupid network Error',
      })
    );
  },
};

export default utils;
