import { supabase } from "../../services/supabaseClient.js";
import alertBox from "../../utils/alert-box.js";

class RegisterPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const form = this.shadowRoot.querySelector('form');
    
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const fullName = this.shadowRoot.querySelector('#fullname').value.trim().toLowerCase();
      const email = this.shadowRoot.querySelector('#email').value.trim().toLowerCase();
      const password = this.shadowRoot.querySelector('#password').value.trim().toLowerCase();
      const confirmPassword = this.shadowRoot.querySelector('#confirm-password').value;

      if (password !== confirmPassword) {
        alertBox.component.createAlert("error", "The passwords do not match!")
        return;
      }

      try {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
              full_name: fullName
            }
          }
        });

        if (error) {
          alert(error.message);
          alertBox.component.createAlert("error", error.message)
          return;
        }

        alertBox.component.createAlert("success", "Your user account has been successfully created.")


      } catch (err) {
        console.error(err);
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

        .register-container {
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-xl, 2rem) var(--space-md, 1rem);
        }

        .register-card {
          background-color: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-lg, 0.75rem);
          padding: var(--space-2xl, 2.5rem);
          width: 100%;
          max-width: 440px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
        }

        .register-header {
          text-align: center;
          margin-bottom: var(--space-xl, 2rem);
        }

        .register-title {
          font-size: 1.75rem;
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-main, #0f172a);
          margin: 0 0 var(--space-xs, 0.25rem) 0;
          letter-spacing: -0.5px;
        }

        .register-subtitle {
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-muted, #64748b);
          margin: 0;
        }

        .form-group {
          margin-bottom: var(--space-md, 1.125rem);
          display: flex;
          flex-direction: column;
          gap: var(--space-xs, 0.375rem);
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

        .terms-group {
          display: flex;
          align-items: center;
          gap: var(--space-xs, 0.5rem);
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-muted, #64748b);
          margin: var(--space-lg, 1.25rem) 0;
          cursor: pointer;
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
        }

        .btn-submit:hover {
          background-color: var(--primary-hover, #1d4ed8);
        }

        .login-prompt {
          text-align: center;
          margin-top: var(--space-xl, 1.5rem);
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-muted, #64748b);
        }

        .login-link {
          color: var(--primary-color, #2563eb);
          text-decoration: none;
          font-weight: 600;
        }

        .login-link:hover {
          text-decoration: underline;
        }
      </style>

      <div class="register-container">
        <div class="register-card">
          <div class="register-header">
            <h1 class="register-title">Create an Account</h1>
            <p class="register-subtitle">Join us today by entering your details below.</p>
          </div>

          <form>
            <div class="form-group">
              <label class="form-label" for="fullname">Full Name</label>
              <input class="form-input" type="text" id="fullname" placeholder="John Doe" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="email">Email Address</label>
              <input class="form-input" type="email" id="email" placeholder="name@example.com" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="password">Password</label>
              <input class="form-input" type="password" id="password" placeholder="••••••••" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="confirm-password">Confirm Password</label>
              <input class="form-input" type="password" id="confirm-password" placeholder="••••••••" required>
            </div>

            <label class="terms-group">
              <input type="checkbox" id="terms" required> I agree to the Terms & Conditions
            </label>

            <button type="submit" class="btn-submit">Create Account</button>
          </form>

          <div class="login-prompt">
            Already have an account?
            <link-component path="/login/" name="login">
              <p>Login</p>
            </link-component>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('register-page', RegisterPage);
export default RegisterPage;