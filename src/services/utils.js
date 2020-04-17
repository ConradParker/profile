const utils = {
  /**
   * Get nested object values or return undefined
   */
  getNested: (object, ...keys) => {
    return keys.reduce((a, b) => (a || {})[b], object) !== undefined;
  },

  /**
   * Parse a url and break it into resource, id and verb
   */
  parseRequestURL: () => {
    const url = window.location.hash.slice(1) || '/';
    const [resource, id, verb] = url.split('/').splice(1);
    return { resource, id, verb };
  },
};

export default utils;
