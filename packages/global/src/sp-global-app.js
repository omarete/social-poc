import { LitElement, html, css } from 'lit';

export class SPGlobalApp extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    h2 {
      margin-top: 0;
    }
  `;

  render() {
    return html`
      <h2>Agenda Global</h2>
      <p>
        Aquí irán debates sobre conflictos globales, economía, tecnologías
        “verdes” y su impacto real, etc.
      </p>
      <ul>
        <li>Conflictos y resolución pacífica</li>
        <li>Evaluación de tecnologías “eco”</li>
        <li>Modelo económico global y alternativas</li>
      </ul>
    `;
  }
}

customElements.define('sp-global-app', SPGlobalApp);
