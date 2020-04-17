const error404 = {
  render: async () => {
    const view = `
          <section class="section">
              <h1>Skills</h1>
          </section>
      `;
    return view;
  },
  after_render: async () => {},
};
export default error404;
