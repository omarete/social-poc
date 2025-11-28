import { LitElement, html, css } from 'lit';

export class SPButton extends LitElement {
  static styles = css`
    button {
      border-radius: 999px;
      padding: 0.4rem 0.9rem;
      border: none;
      cursor: pointer;
    }
  `;

  render() {
    return html`<button><slot></slot></button>`;
  }
}

customElements.define('sp-button', SPButton);
