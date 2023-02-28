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
        const status = data.value_classification;
        const percent = data.value;

        let startTimeMilliseconds = data.time_until_update * 1000;

        setInterval(function () {
          const timeToUpdate = utils.msToTime(startTimeMilliseconds);
          startTimeMilliseconds -= 1000;
          document.getElementById(
            'number-container'
          ).innerHTML = `${percent}% ${status}<br/><br/>  Time to next update: ${timeToUpdate}`;
        }, 1000);
        document.getElementById('title').innerHTML = `${title}`;

        fear.returnChart(percent / 100);
      }
    } catch (error) {
      utils.handleError(error);
    }
  },
};
