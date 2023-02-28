import utils from '../../../services/utils.js';
import fear from '../../../services/fear-and-greed.js';

export default {
  render: async () => {
    return utils.getPage('charts');
  },
  after_render: async () => {
    try {
      const response = await fetch('https://api.alternative.me/fng');

      // handle success
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        console.log(json.data.value);
        const percent = json.data.value;
        fear.returnChart(percent / 100);
        document.getElementsByClassName(
          'number-container'
        ).innerHTML = `${percent}%`;
      }
    } catch (error) {
      utils.handleError(error);
    }
  },
};
