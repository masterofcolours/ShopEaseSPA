import alertBox from "../../utils/alert-box.js";
import "../alertitem/alert.js";

class AlertBox extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.box = this.shadowRoot.querySelector(".alert-box");
    alertBox.component = this;
  }

  createAlert(type, content){
    this.box.insertAdjacentHTML("afterbegin", 
        `
            <app-alert type="${type}">
                <p>${content}</p>
            </app-alert>
        `)
  }

  render() {
    const type = this.getAttribute('type') || 'info';

    this.shadowRoot.innerHTML = `
      <style>
          :host {
              display: block;
              position: fixed;
              z-index: 1000001111;
              bottom: 20px;
              right: 20px;
              left: auto;
              transform: none;
          }

          .alert-box {
              width: 400px;
              max-width: calc(100vw - 40px);
              min-height: 400px;
              max-height: 400px;
              overflow-y: auto;
              overflow-x: hidden;
              display: flex;
              flex-direction: column-reverse;
              gap: 10px;
              align-items: center;
          }

          @media (max-width: 768px) {
              :host {
                  right: 50%;
                  left: auto;
                  transform: translateX(50%); 
              }
              
              .alert-box {
                  width: 90vw;
              }
          }
      </style>

      <div class="alert-box">

      </div>
    `;
  }
}

window.customElements.define('alert-box', AlertBox);
export default AlertBox;