import './LegalPage.css'

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Point of Balance Sports Centre ("we", "our", or "us") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
          you visit our website and use our services.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
        <ul>
          <li>Personal identification information (name, email address, phone number, etc.)</li>
          <li>Payment information</li>
          <li>Usage data and analytics</li>
          <li>Cookies and tracking technologies</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices and support messages</li>
          <li>Respond to your comments and questions</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational security measures to protect your personal
          information. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
        </ul>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:
          <br />
          Email: privacy@pointofbalancesportscentre.com
        </p>
      </section>
    </div>
  )
}

export default PrivacyPolicy
