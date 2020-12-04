export default {
  render: async () => {
    const view = `
          <section class="section">
            <h2 class="section__header">Links</h2>
            <ul class="list">
              <li>This site on github</li>
              <li>Github</li>
              <li>My old website <a href="#">htts://archived.sunseasolutions.com</a>
              <li>LinkedIn</li>
            </ul>
          </section>
      `;
    return view;
  },
  after_render: async () => {},
};
