import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("home-component")
export class Home extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  render() {
    return html`
      <h1>Home Page</h1>
      <p>This is the Home Page.</p>
    `;
  }
}
