import utils from '../../../services/utils.js';

export default {
  render: async () => {
    return utils.getPage('links');
  },
  after_render: async () => {},
};
