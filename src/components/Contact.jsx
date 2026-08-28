function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-intro">
            <p className="section-label">CONTACT</p>

            <h2>Let's build something useful.</h2>

            <p>
              I'm open to software development opportunities, freelance
              projects, and collaborations where I can contribute my
              development, testing, and problem-solving skills.
            </p>
          </div>

          <div className="contact-details">
            <a href="mailto:samawahidee@gmail.com" className="contact-link">
              <span className="contact-label">EMAIL</span>
              <span className="contact-value">samawahidee@gmail.com</span>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/samawahidee/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-label">LINKEDIN</span>
              <span className="contact-value">View my LinkedIn profile</span>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://github.com/Sama-wahidee/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-label">GITHUB</span>
              <span className="contact-value">View my GitHub projects</span>
              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
