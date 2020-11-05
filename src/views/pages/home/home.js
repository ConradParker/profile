import utils from '../../../services/utils.js';

export default {
  render: async () => {
    utils.injectCss('/views/pages/home/home.css');
    return utils.getPage('home');
  },
  after_render: async () => {},
};
