import utils from '../../../services/utils.js';

export default {
  render: async () => {
    return utils.getPage('projects');
  },
  after_render: async () => {},
};
