import utils from '../../../services/utils.js';

export default {
  render: async () => {
    return utils.getPage('career');
  },
  after_render: async () => {},
};
