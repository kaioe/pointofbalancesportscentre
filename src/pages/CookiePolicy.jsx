import './LegalPage.css'

function CookiePolicy() {
  return (
    <div className="legal-page">
      <h1>Cookie Policy</h1>
      <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a
          website. They are widely used to make websites work more efficiently and provide information to
          the website owners.
        </p>
      </section>

      <section>
        <h2>2. How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly</li>
          <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website</li>
          <li><strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization</li>
          <li><strong>Marketing Cookies:</strong> These cookies are used to deliver relevant advertisements</li>
        </ul>
      </section>

      <section>
        <h2>3. Types of Cookies We Use</h2>
        <h3>3.1 Session Cookies</h3>
        <p>
          Session cookies are temporary cookies that are deleted when you close your browser. They help
          maintain your session while you navigate through the website.
        </p>

        <h3>3.2 Persistent Cookies</h3>
        <p>
          Persistent cookies remain on your device for a set period or until you delete them. They help
          us remember your preferences and improve your experience.
        </p>
      </section>

      <section>
        <h2>4. Third-Party Cookies</h2>
        <p>
          Some cookies are placed by third-party services that appear on our pages. We do not control
          the setting of these cookies, so please check the third-party websites for more information
          about their cookies and how to manage them.
        </p>
      </section>

      <section>
        <h2>5. Managing Cookies</h2>
        <p>
          You can control and manage cookies in various ways. Please keep in mind that removing or blocking
          cookies can impact your user experience and parts of our website may no longer be fully accessible.
        </p>
        <p>Most browsers allow you to:</p>
        <ul>
          <li>See what cookies you have and delete them individually</li>
          <li>Block third-party cookies</li>
          <li>Block cookies from particular sites</li>
          <li>Block all cookies from being set</li>
          <li>Delete all cookies when you close your browser</li>
        </ul>
      </section>

      <section>
        <h2>6. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in technology, legislation,
          or our data use practices. We will notify you of any material changes by posting the new policy
          on this page.
        </p>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us at:
          <br />
          Email: privacy@pointofbalancesportscentre.com
        </p>
      </section>
    </div>
  )
}

export default CookiePolicy
