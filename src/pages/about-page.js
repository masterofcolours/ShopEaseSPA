class About extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.shadowRoot.innerHTML =  
        `
            <style>
        :host {
          display: block;
          width: 100%;
        }

        .about-container {
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--space-xl, 3rem) var(--space-md, 1rem);
          box-sizing: border-box;
        }

        .about-wrapper {
          width: 100%;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .about-header {
          text-align: center;
          background-color: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-lg, 0.75rem);
          padding: var(--space-2xl, 3rem) var(--space-xl, 2rem);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        }

        .about-title {
          font-size: 2.25rem;
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-main, #0f172a);
          margin: 0 0 1rem 0;
          letter-spacing: -0.5px;
        }

        .about-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted, #64748b);
          line-height: 1.7;
          margin: 0 auto;
          max-width: 700px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .feature-card {
          background-color: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-lg, 0.75rem);
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .feature-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: var(--font-weight-semibold, 600);
          color: var(--text-main, #0f172a);
          margin: 0 0 0.75rem 0;
        }

        .feature-desc {
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-muted, #64748b);
          line-height: 1.6;
          margin: 0;
        }

        .story-section {
          background-color: var(--bg-subtle, #f8fafc);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-lg, 0.75rem);
          padding: 2.5rem;
          text-align: center;
        }

        .story-title {
          font-size: 1.5rem;
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-main, #0f172a);
          margin: 0 0 1rem 0;
        }

        .story-desc {
          font-size: 0.95rem;
          color: var(--text-muted, #64748b);
          line-height: 1.8;
          max-width: 750px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .about-title {
            font-size: 1.75rem;
          }

          .about-header, .story-section {
            padding: 2rem 1.25rem;
          }
        }
      </style>

      <div class="about-container">
        <div class="about-wrapper">
          
          <div class="about-header">
            <h1 class="about-title">Welcome to Our Store</h1>
            <p class="about-subtitle">
              Your ultimate destination for quality products, exceptional value, and a seamless online shopping experience tailored just for you.
            </p>
          </div>

          <div class="features-grid">
            <div class="feature-card">
              <h3 class="feature-title">Our Mission</h3>
              <p class="feature-desc">
                To empower our customers by providing access to top-tier products, transparent pricing, and a trustworthy shopping environment built around convenience and reliability.
              </p>
            </div>

            <div class="feature-card">
              <h3 class="feature-title">Why Shop With Us?</h3>
              <p class="feature-desc">
                We prioritize your satisfaction above everything else. From secure checkout processes to dedicated customer support, we ensure your journey with us is smooth and enjoyable.
              </p>
            </div>
          </div>

          <div class="story-section">
            <h3 class="story-title">Our Story</h3>
            <p class="story-desc">
              Founded with a passion for modern retail, our store has grown into a trusted community hub for shoppers worldwide. We continuously update our catalog and improve our services to meet your evolving needs, ensuring that every purchase you make brings maximum satisfaction and peace of mind.
            </p>
          </div>

        </div>
      </div>


        `
    }

    connectedCallback(){
        this.render()
    }

}

window.customElements.define("about-component", About)

export default About;