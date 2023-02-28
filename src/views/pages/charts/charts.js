import utils from '../../../services/utils.js';
import fear from '../../../services/fear-and-greed.js';

export default {
  render: async () => {
    return utils.getPage('charts');
  },
  after_render: async () => {
    try {
      const response = await fetch('https://api.alternative.me/fng/');

      // handle success
      if (response.ok) {
        const json = await response.json();
        const title = json.name;
        const data = json.data[0];
        const timeToUpdate = utils.msToTime(data.time_until_update * 1000);
        const percent = data.value;

        document.getElementById(
          'number-container'
        ).innerText = `${title} - ${percent}% \n Time to next update: ${timeToUpdate}`;
        fear.returnChart(percent / 100);
      }
    } catch (error) {
      utils.handleError(error);
    }
  },
};
