import utils from '../../../services/utils.js';
import '../../components/project-item.js';

export default {
  render: async () => {
    return utils.getPage('projects');
  },
  after_render: async () => {},
};
