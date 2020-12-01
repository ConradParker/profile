import utils from '../../../services/utils.js';

export default {
  render: async () => {
    utils.injectCss('/views/pages/skills/skills.css');
    return utils.getPage('skills');
  },
  after_render: async () => {},
};
