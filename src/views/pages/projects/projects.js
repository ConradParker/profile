import utils from '../../../services/utils.js';

export default {
  render: async () => {
    utils.injectCss('/views/pages/prjects/projects.css');
    return utils.getPage('projects');
  },
  after_render: async () => {},
};
