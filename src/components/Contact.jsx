const Contact = ({ ref }) => {
  return (
    <div className="footer-wrapper" id="contact" ref={ref}>
      <footer className="footer">
        <h2>Let's Work Together</h2>
        <div className="footer-sub-heading-links-wrapper">
          <p>
            Have a project in mind? <span>Send me an email or check out my code on GitHub.</span>
          </p>
          <div className="footer-links">
            <a href="mailto:sohail.frontend@gmail.com" rel="noopener noreferrer">
              <label>
                Email: <span>sohail.frontend@gmail.com</span>
              </label>
            </a>
            <a href="https://github.com/sohail-webdev/" rel="noopener noreferrer" target="_blank">
              <label>
                GitHub: <span>sohail-webdev</span>
              </label>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
