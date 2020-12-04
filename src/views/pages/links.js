export default {
  render: async () => {
    const view = `
          <section class="section center">
            <h2 class="section__header">Links</h2>
            <ul class="list list--nobullet">
              <li class="list-item">
                Linked In
                <a class="link" href="https://www.linkedin.com/in/conradjparker/">
                  <img class="link__image" src="../images/linked-in.png" alt="Linked In" title="Linked In" />https://www.linkedin.com/in/conradjparker/
                </a>
              </li>
              <li class="list-item">
                Github
                <a class="link" href="https://github.com/ConradParker">
                  <img class="link__image" src="../images/github.png" alt="Github" title="Github Profile" />https://github.com/ConradParker
                </a>
              </li>
              <li class="list-item">
              My old website (Just could bring it down)
              <a class="link" href="https://archived.sunseasolutions.com">
                <img class="link__image" src="../images/sun.png" alt="My old site" title="My old site" />https://archived.sunseasolutions.com
              </a>
            </ul>
          </section>
      `;
    return view;
  },
  after_render: async () => {},
};
