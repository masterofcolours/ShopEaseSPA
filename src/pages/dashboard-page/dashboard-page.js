import { supabase } from "../../services/supabaseClient.js";
import alertBox from "../../utils/alert-box.js";
import changePage from "../../utils/change-page.js";


class DashboardPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.user = null;
    this.loading = true;
  }

  async connectedCallback() {
    await this.checkAuthAndLoadData();
  }

  async checkAuthAndLoadData() {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error || !session) {
        window.history.pushState({}, '', "/login/");
        changePage("/login/")
        return;
      }

      this.user = session.user;
      
      this.loading = false;
      this.render();
      this.setupEventListeners();

    } catch (err) {
      console.error('Error checking auth session:', err);
      this.loading = false;
      this.render();
    }
  }

  setupEventListeners() {
    const logoutBtn = this.shadowRoot.querySelector('#logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          alert(error.message);
          return;
        }
        window.history.pushState({}, '', "/login/");
        changePage("/login/");
        alertBox.component.createAlert("success", "You have logged out of your account.")
      });
    }
  }

  render() {
    if (this.loading) {
      this.shadowRoot.innerHTML = `
        <style>
          .loading { display: flex; justify-content: center; align-items: center; height: 80vh; font-family: inherit; color: var(--text-muted, #64748b); }
        </style>
        <div class="loading">Loading dashboard...</div>
      `;
      return;
    }

    const email = this.user ? this.user.email : '';
    const fullName = this.user?.user_metadata?.full_name || "User X";

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .dashboard-container {
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-xl, 2rem) var(--space-md, 1rem);
        }

        .dashboard-card {
          background-color: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-lg, 0.75rem);
          padding: var(--space-2xl, 2.5rem);
          width: 100%;
          max-width: 500px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: var(--space-xl, 2rem);
        }

        .dashboard-title {
          font-size: 1.75rem;
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-main, #0f172a);
          margin: 0 0 var(--space-xs, 0.25rem) 0;
          letter-spacing: -0.5px;
        }

        .dashboard-subtitle {
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-muted, #64748b);
          margin: 0;
        }

        .user-info-box {
          background-color: var(--bg-subtle, #f8fafc);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-md, 0.5rem);
          padding: 1.25rem;
          margin-bottom: var(--space-xl, 1.5rem);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .info-item {
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-main, #0f172a);
        }

        .info-label {
          font-weight: var(--font-weight-semibold, 600);
          color: var(--text-muted, #64748b);
          display: inline-block;
          width: 90px;
        }

        .btn-logout {
          width: 100%;
          background-color: #2563eb;
          color: #ffffff;
          border: none;
          padding: 0.85rem 1rem;
          font-size: var(--font-size-base, 1rem);
          font-weight: var(--font-weight-semibold, 600);
          border-radius: var(--radius-md, 0.5rem);
          cursor: pointer;
          transition: background-color var(--transition-fast, 150ms);
        }

        .btn-logout:hover {
          background-color: #2563eb;
        }
      </style>

      <div class="dashboard-container">
        <div class="dashboard-card">
          <div class="dashboard-header">
            <h1 class="dashboard-title">Welcome, ${fullName}!</h1>
            <p class="dashboard-subtitle">Here is your account overview and panel.</p>
          </div>

          <div class="user-info-box">
            <div class="info-item">
              <span class="info-label">Full Name:</span> ${fullName}
            </div>
            <div class="info-item">
              <span class="info-label">Email:</span> ${email}
            </div>
          </div>

          <button class="btn-logout" id="logout-btn">Sign Out</button>
        </div>
      </div>
    `;
  }
}

window.customElements.define('dashboard-page', DashboardPage);
export default DashboardPage;