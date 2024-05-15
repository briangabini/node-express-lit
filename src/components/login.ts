import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../assets/styles/base.css";

@customElement("login-component")
export class Login extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  render() {
    return html`
      <h1>Login Page</h1>
      <p>This is the Login Page.</p>
    `;
  }
}
