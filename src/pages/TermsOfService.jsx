import './LegalPage.css'

function TermsOfService() {
  return (
    <div className="legal-page">
      <h1>Terms of Service</h1>
      <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using the Point of Balance Sports Centre website and services, you agree to be
          bound by these Terms of Service and all applicable laws and regulations. If you do not agree with
          any of these terms, you are prohibited from using or accessing this site.
        </p>
      </section>

      <section>
        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily access the materials on Point of Balance Sports Centre's website
          for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
          of title, and under this license you may not:
        </p>
        <ul>
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display</li>
          <li>Attempt to reverse engineer any software contained on the website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
        </ul>
      </section>

      <section>
        <h2>3. Services</h2>
        <p>
          Point of Balance Sports Centre provides sports and fitness services. We reserve the right to modify,
          suspend, or discontinue any service at any time without prior notice.
        </p>
      </section>

      <section>
        <h2>4. User Accounts</h2>
        <p>
          When you create an account with us, you must provide information that is accurate, complete, and
          current at all times. You are responsible for safeguarding the password and for all activities
          that occur under your account.
        </p>
      </section>

      <section>
        <h2>5. Prohibited Uses</h2>
        <p>You may not use our services:</p>
        <ul>
          <li>In any way that violates any applicable law or regulation</li>
          <li>To transmit any malicious code or viruses</li>
          <li>To impersonate or attempt to impersonate the company or any employee</li>
          <li>In any way that infringes upon the rights of others</li>
        </ul>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>
          In no event shall Point of Balance Sports Centre, nor its directors, employees, partners, agents,
          suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or
          punitive damages resulting from your use of our services.
        </p>
      </section>

      <section>
        <h2>7. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at:
          <br />
          Email: legal@pointofbalancesportscentre.com
        </p>
      </section>
    </div>
  )
}

export default TermsOfService
