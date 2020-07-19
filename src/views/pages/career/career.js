import utils from '../../../services/utils.js';

export default {
  render: async () => {
    utils.injectCss('/views/pages/career/career.css');
    return utils.getPage('career');
  },
  after_render: async () => {},
};
