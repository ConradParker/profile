import utils from '../../../services/utils.js';

export default {
  render: async () => {
    return utils.getPage('skills');
  },
  after_render: async () => {},
};
