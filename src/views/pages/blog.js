export default {
  render: async () => {
    const view = `
          <section class="section">
            <h1>Blog</h1>
            <ul>
              <li>Bundling</li>
              <li>CSS injection. I was using seperate CSS files for maintainability but this causes a big delay during paging load and usability issues.</li>
              <li>Use headless CMS for content management.</li>
            </ul>
          </section>
      `;
    return view;
  },
  after_render: async () => {},
};
