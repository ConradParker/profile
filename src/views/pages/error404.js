const error404 = {
  render: async () => {
    const view = `
          <section class="section">
              <h1> 404 Error. This page could not be found. </h1>
              Click <a href="/">here</a> for the home page
          </section>
      `;
    return view;
  },
  after_render: async () => {},
};
export default error404;
