import newStore from "../../store/cart-store.js";

class CheckoutPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render
    (
      JSON.parse(localStorage.getItem("products")), 
      Number(localStorage.getItem("price")), 
    );
    this.unSubscribe = newStore.subscribe(this);
  }

  disconnectedCallback(){
    this.unSubscribe(this);
  }

  render(localStorageItems, price) {

    this.total = price || newStore.getStore().totalPrice || 0;

    this.products = localStorageItems || newStore.getStore().items;


    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .checkout-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-2xl, 3rem) var(--space-md, 1rem);
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: var(--space-2xl, 2.5rem);
          align-items: start;
        }

        @media (max-width: 900px) {
          .checkout-container {
            grid-template-columns: 1fr;
          }
        }

        .section-card {
          background-color: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-lg, 0.75rem);
          padding: var(--space-xl, 2rem);
          margin-bottom: var(--space-xl, 1.5rem);
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: var(--font-weight-semibold, 600);
          color: var(--text-main, #0f172a);
          margin-bottom: var(--space-lg, 1.25rem);
          padding-bottom: var(--space-xs, 0.5rem);
          border-bottom: 1px solid var(--border-color, #e2e8f0);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md, 1rem);
        }

        .form-group {
          margin-bottom: var(--space-md, 1rem);
          display: flex;
          flex-direction: column;
          gap: var(--space-xs, 0.375rem);
        }

        .form-group.full-width {
          grid-column: span 2;
        }

        .form-label {
          font-size: var(--font-size-sm, 0.875rem);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--text-main, #0f172a);
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: var(--font-size-base, 1rem);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-md, 0.5rem);
          background-color: var(--bg-surface, #ffffff);
          color: var(--text-main, #0f172a);
          box-sizing: border-box;
          transition: border-color 150s, box-shadow 150s;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary-color, #2563eb);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .payment-options {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm, 0.75rem);
        }

        .payment-option {
          display: flex;
          align-items: center;
          gap: var(--space-sm, 0.75rem);
          padding: 1rem;
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-md, 0.5rem);
          cursor: pointer;
          font-weight: 500;
          color: var(--text-main, #0f172a);
        }

        .summary-card {
          background-color: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-lg, 0.75rem);
          padding: var(--space-xl, 2rem);
          position: sticky;
          top: 2rem;
        }

        .summary-items {
          max-height: 250px;
          overflow-y: auto;
          margin-bottom: var(--space-lg, 1.25rem);
          display: flex;
          flex-direction: column;
          gap: var(--space-sm, 0.75rem);
          padding-right: 0.5rem;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-muted, #64748b);
        }

        .summary-item span:first-child {
          color: var(--text-main, #0f172a);
          font-weight: 500;
        }

        .summary-totals {
          border-top: 1px solid var(--border-color, #e2e8f0);
          padding-top: var(--space-md, 1rem);
          display: flex;
          flex-direction: column;
          gap: var(--space-xs, 0.5rem);
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-muted, #64748b);
        }

        .total-row.final {
          font-size: 1.125rem;
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-main, #0f172a);
          margin-top: var(--space-xs, 0.5rem);
        }

        .btn-submit {
          width: 100%;
          background-color: var(--primary-color, #2563eb);
          color: var(--text-inverse, #ffffff);
          border: none;
          padding: 0.85rem 1rem;
          font-size: var(--font-size-base, 1rem);
          font-weight: var(--font-weight-semibold, 600);
          border-radius: var(--radius-md, 0.5rem);
          cursor: pointer;
          margin-top: var(--space-xl, 1.5rem);
          transition: background-color var(--transition-fast, 150ms);
        }

        .btn-submit:hover {
          background-color: var(--primary-hover, #1d4ed8);
        }
      </style>

      <div class="checkout-container">
        <div class="checkout-form-section">
          <form id="checkout-form">
            <div class="section-card">
              <h2 class="section-title">Shipping Information</h2>
              <div class="form-grid">
                <div class="form-group full-width">
                  <label class="form-label" for="fullname">Full Name</label>
                  <input class="form-input" type="text" id="fullname" placeholder="John Doe" required>
                </div>

                <div class="form-group full-width">
                  <label class="form-label" for="address">Street Address</label>
                  <input class="form-input" type="text" id="address" placeholder="123 Main St, Apt 4B" required>
                </div>

                <div class="form-group">
                  <label class="form-label" for="city">City</label>
                  <input class="form-input" type="text" id="city" placeholder="New York" required>
                </div>

                <div class="form-group">
                  <label class="form-label" for="postal">Postal Code</label>
                  <input class="form-input" type="text" id="postal" placeholder="10001" required>
                </div>
              </div>
            </div>

            <div class="section-card">
              <h2 class="section-title">Payment Method</h2>
              <div class="payment-options">
                <label class="payment-option">
                  <input type="radio" name="payment" value="card" checked> Credit / Debit Card
                </label>
                <label class="payment-option">
                  <input type="radio" name="payment" value="paypal"> PayPal Express
                </label>
                <label class="payment-option">
                  <input type="radio" name="payment" value="cod"> Cash on Delivery
                </label>
              </div>
            </div>
          </form>
        </div>

        <div class="summary-card">
          <h2 class="section-title">Order Summary</h2>
            <div class="summary-items">
              <div class="summary-items">
              ${this.products.length === 0 ? '<div style="color: var(--text-muted); text-align: center; padding: 1rem 0;">Your cart is empty</div>' : ''}
              ${this.products.map(item => {
                const count = item.arr ? item.arr.length : (item.quantity || 1);
                const title = item.title || item.arr[0].title;
                const price = item.price || (item.arr[0].price * item.arr.length);
                return `
                  <div class="summary-item">
                    <span>${title} (x${count})</span>
                    <span>$${(price).toFixed(2)}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="summary-totals">
            <div class="total-row">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <div class="total-row">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div class="total-row final">
              <span>Total</span>
              <span>$${this.total}</span>
            </div>
          </div>

          <button type="submit" form="checkout-form" class="btn-submit">Place Order</button>
        </div>
      </div>
    `;
  }
}

window.customElements.define('checkout-page', CheckoutPage);
export default CheckoutPage;