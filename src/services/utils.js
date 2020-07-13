const utils = {
  /**
   * Get nested object values or return undefined
   */
  getNested(object, ...keys) {
    return keys.reduce((a, b) => (a || {})[b], object) !== undefined;
  },

  async getPage(pageName) {
    const page = await fetch(`./views/pages/${pageName}/${pageName}.html`);
    const view = await page.text();
    return view;
  },
};

export default utils;
