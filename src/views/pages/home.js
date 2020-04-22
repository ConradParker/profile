/**
 * Use in line for performance
 * Maybe look into a way to preload these
 */
const view = `
<section class="section">
  <h1>Home Page</h1>
  <p>Sorry this page is still under development.</p>
  <ul>
    <li>Father</li>
    <li>Husband</li>
    <li>Software Developer</li>
    <li>Juggler</li>
    <li>Geek</li>
  </ul>
</section>
`;

export default {
  render: async () => {
    return view;
  },
  after_render: async () => {},
};
