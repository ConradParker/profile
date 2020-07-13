import utils from '../../../services/utils.js';

export default {
  render: async () => {
    return utils.getPage('contact');
  },
  after_render: async () => {},
};
