import utils from '../../services/utils.js';

export default {
  render: async () => {
    return utils.getPage('home');
  },
  after_render: async () => {},
};
