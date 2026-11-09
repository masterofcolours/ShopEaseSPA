class AppAlert extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    setTimeout(()=>{
      this.remove()
    }, 2000)
  }

  render() {
    const type = this.getAttribute('type') || 'info';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          margin-bottom: 1rem;
          font-family: inherit;
        }

        .alert {
          width: 100%;
          display: flex;
          align-items: flex-start;
          padding: 10px 10px;
          border-radius: var(--radius-md, 0.5rem);
          border: 1px solid transparent;
          font-size: var(--font-size-sm, 0.875rem);
          font-weight: bold;
          line-height: 1.5;
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        .alert-info {
          background-color: #eff6ff;
          border-color: #bfdbfe;
          color: #1e40af;
        }

        .alert-success {
          background-color: #f0fdf4;
          border-color: #bbf7d0;
          color: #166534;
        }

        .alert-warning {
          background-color: #fffbeb;
          border-color: #fde68a;
          color: #92400e;
        }

        .alert-error {
          background-color: #fef2f2;
          border-color: #fecaca;
          color: #991b1b;
        }

        .alert-content {
          flex: 1;
        }
      </style>

      <div class="alert alert-${type}">
        <div class="alert-content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

window.customElements.define('app-alert', AppAlert);
export default AppAlert;