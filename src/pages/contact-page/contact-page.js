import alertBox from "../../utils/alert-box.js";

class ContactPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const form = this.shadowRoot.querySelector('#contact-form');
    const alertBoxElement = this.shadowRoot.querySelector('#form-alert');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = this.shadowRoot.querySelector('#name').value.trim();
      const email = this.shadowRoot.querySelector('#email').value.trim();
      const subject = this.shadowRoot.querySelector('#subject').value.trim();
      const message = this.shadowRoot.querySelector('#message').value.trim();

      try {
        alertBox.component.createAlert("success", "Your message has been sent!");
        form.reset();
      } catch (err) {
        alertBox.component.createAlert("error", "An error occurred. Please try again.");
        console.error('Error sending message:', err);
      }
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .contact-container {
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-xl, 2rem) var(--space-md, 1rem);
          box-sizing: border-box;
        }

        .contact-wrapper {
          background-color: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-lg, 0.75rem);
          width: 100%;
          max-width: 900px;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
        }

        .contact-info-side {
          background-color: var(--bg-subtle, #f8fafc);
          padding: var(--space-2xl, 2.5rem);
          border-right: 1px solid var(--border-color, #e2e8f0);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2rem;
        }

        .info-header h2 {
          font-size: 1.5rem;
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-main, #0f172a);
          margin: 0 0 0.5rem 0;
        }

        .info-header p {
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-muted, #64748b);
          margin: 0;
          line-height: 1.6;
        }

        .info-details {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-main, #0f172a);
        }

        .info-item strong {
          display: block;
          color: var(--text-muted, #64748b);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.15rem;
        }

        .contact-form-side {
          padding: var(--space-2xl, 2.5rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-main, #0f172a);
          margin: 0 0 1.5rem 0;
        }

        .form-group {
          margin-bottom: 1.125rem;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .form-label {
          font-size: var(--font-size-sm, 0.875rem);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--text-main, #0f172a);
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: var(--font-size-base, 1rem);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-md, 0.5rem);
          background-color: var(--bg-surface, #ffffff);
          color: var(--text-main, #0f172a);
          box-sizing: border-box;
          font-family: inherit;
          transition: border-color 150s, box-shadow 150s;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--primary-color, #2563eb);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
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
          transition: background-color var(--transition-fast, 150ms);
          margin-top: 0.5rem;
        }

        .btn-submit:hover {
          background-color: var(--primary-hover, #1d4ed8);
        }

        #form-alert {
          display: none;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
          }
          
          .contact-info-side {
            border-right: none;
            border-bottom: 1px solid var(--border-color, #e2e8f0);
            padding: 1.5rem;
          }

          .contact-form-side {
            padding: 1.5rem;
          }
        }
      </style>

      <div class="contact-container">
        <div class="contact-wrapper">
          
          <!-- ستون چپ: اطلاعات تماس -->
          <div class="contact-info-side">
            <div class="info-header">
              <h2>Get in Touch</h2>
              <p>Have questions about our products or services? Fill out the form or reach us through the details below.</p>
            </div>

            <div class="info-details">
              <div class="info-item">
                <div>
                  <strong>Email Us</strong>
                  support@example.com
                </div>
              </div>
              <div class="info-item">
                <div>
                  <strong>Phone</strong>
                  +1 (555) 123-4567
                </div>
              </div>
              <div class="info-item">
                <div>
                  <strong>Office Location</strong>
                  123 E-Commerce St, Tech City
                </div>
              </div>
            </div>

            <div class="info-footer" style="font-size: 0.8rem; color: var(--text-muted, #64748b);">
              We usually respond within 24 hours on business days.
            </div>
          </div>

          <!-- ستون راست: فرم تماس -->
          <div class="contact-form-side">
            <h1 class="form-title">Contact Us</h1>

            <!-- استفاده از کامپوننت آلرت سفارشی که ساختیم -->
            <app-alert id="form-alert" type="success"></app-alert>

            <form id="contact-form">
              <div class="form-group">
                <label class="form-label" for="name">Your Name</label>
                <input class="form-input" type="text" id="name" placeholder="Enter Your Name" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="email">Email Address</label>
                <input class="form-input" type="email" id="email" placeholder="name@example.com" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="subject">Subject</label>
                <input class="form-input" type="text" id="subject" placeholder="How can we help?" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="message">Message</label>
                <textarea class="form-input form-textarea" id="message" placeholder="Write your message here..." required></textarea>
              </div>

              <button type="submit" class="btn-submit">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    `;
  }
}

window.customElements.define('contact-page', ContactPage);
export default ContactPage;