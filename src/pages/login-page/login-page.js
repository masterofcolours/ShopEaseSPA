class LoginPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  setupEventListeners() {
    // const form = this.shadowRoot.querySelector('form');
    // form.addEventListener('submit', (e) => {
    //   e.preventDefault();
      
    //   const email = this.shadowRoot.querySelector('#email').value;
    //   const password = this.shadowRoot.querySelector('#password').value;

    //   // شبیه‌سازی فرایند لاگین
    //   console.log('Logging in with:', { email, password });
      
    //   // مثال: بعد از لاگین موفق، هدایت کاربر به صفحه اصلی یا پنل کاربری
    //   window.history.pushState({}, '', '/shop');
    //   window.dispatchEvent(new PopStateEvent('popstate'));
    // });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .login-container {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-xl, 2rem) var(--space-md, 1rem);
        }

        .login-card {
          background-color: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-lg, 0.75rem);
          padding: var(--space-2xl, 2.5rem);
          width: 100%;
          max-width: 420px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
        }

        .login-header {
          text-align: center;
          margin-bottom: var(--space-xl, 2rem);
        }

        .login-title {
          font-size: 1.75rem;
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-main, #0f172a);
          margin: 0 0 var(--space-xs, 0.25rem) 0;
          letter-spacing: -0.5px;
        }

        .login-subtitle {
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-muted, #64748b);
          margin: 0;
        }

        .form-group {
          margin-bottom: var(--space-lg, 1.25rem);
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

        .form-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: var(--font-size-sm, 0.875rem);
          margin-bottom: var(--space-xl, 1.5rem);
        }

        .remember-me {
          display: flex;
          align-items: center;
          gap: var(--space-xs, 0.5rem);
          color: var(--text-muted, #64748b);
          cursor: pointer;
        }

        .forgot-link {
          color: var(--primary-color, #2563eb);
          text-decoration: none;
          font-weight: 500;
        }

        .forgot-link:hover {
          text-decoration: underline;
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

        .register-prompt {
          text-align: center;
          margin-top: var(--space-xl, 1.5rem);
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-muted, #64748b);
        }

        .register-link {
          color: var(--primary-color, #2563eb);
          text-decoration: none;
          font-weight: 600;
        }

        .register-link:hover {
          text-decoration: underline;
        }

        .login-image img{
          width: 100%;
          margin-top: -30px;
        }

      </style>

      <div class="login-container">
        <div class="login-card">
          <div class="login-header">
            <h1 class="login-title">Welcome Back</h1>
            <p class="login-subtitle">Please enter your details to sign in.</p>
          </div>

          <form>
            <div class="form-group">
              <label class="form-label" for="email">Email Address</label>
              <input class="form-input" type="email" id="email" placeholder="name@example.com" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="password">Password</label>
              <input class="form-input" type="password" id="password" placeholder="••••••••" required>
            </div>

            <div class="form-actions">
              <label class="remember-me">
                <input type="checkbox" id="remember"> Remember me
              </label>
              <a href="#" class="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" class="btn-submit">Sign In</button>
          </form>

          <div class="register-prompt">
            Don't have an account? 
            <link-component path="/register/" name="register">
              <p>Register</p>
            </link-component>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('login-page', LoginPage);
export default LoginPage;