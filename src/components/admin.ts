import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../assets/styles/base.css";

@customElement("admin-component")
export class Admin extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  render() {
    return html`
      <h1>Admin Page</h1>
      <p>This is the Admin Page.</p>
    `;
  }
}
