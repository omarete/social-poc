import { LitElement, html, css } from 'lit';

export class SPLocalApp extends LitElement {
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
      <h2>Agenda Local</h2>
      <p>
        Aquí se verán temas como sanidad en la colonia, desabasto de agua,
        organización vecinal, etc.
      </p>
      <ul>
        <li>Proyecto: botes de basura comunitarios</li>
        <li>Proyecto: monitoreo de fugas de agua</li>
        <li>Proyecto: brigadas de limpieza</li>
      </ul>
    `;
  }
}

customElements.define('sp-local-app', SPLocalApp);
