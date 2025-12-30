const Contact = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <h2>Let's Work Together</h2>
        <div className="footer-sub-heading-links-wrapper">
          <p>
            Have a project in mind? <span>Send me an email or check out my code on GitHub.</span>
          </p>
          <div className="footer-links">
            <label>
              Email: <a href="mailto:webdev.sohail@proton.me">webdev.sohail@proton.me</a>
            </label>
            <label>
              GitHub: <a href="https://github.com/sohail-webdev/">sohail-webdev</a>
            </label>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
