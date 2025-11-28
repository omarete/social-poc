import { LitElement, html, css } from 'lit';
import '@social-poc/global';
import '@social-poc/local';

export class SPAppShell extends LitElement {
  static properties = {
    section: { type: String }
  };

  constructor() {
    super();
    this.section = 'global'; // vista por defecto
  }

  static styles = css`
    :host {
      display: block;
      font-family: system-ui, sans-serif;
      min-height: 100vh;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid #ddd;
    }
    nav button {
      margin-right: 0.5rem;
      cursor: pointer;
    }
    main {
      padding: 1rem;
    }
  `;

  #go(section) {
    this.section = section;
  }

  render() {
    return html`
      <header>
        <div><strong>Social POC – Think Tank</strong></div>
        <nav>
          <button @click=${() => this.#go('global')}>Global</button>
          <button @click=${() => this.#go('local')}>Local</button>
        </nav>
      </header>

      <main>
        ${this.section === 'global'
          ? html`<sp-global-app></sp-global-app>`
          : html`<sp-local-app></sp-local-app>`}
      </main>
    `;
  }
}

customElements.define('sp-app-shell', SPAppShell);
