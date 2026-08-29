import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function Contact() {
  const contactLinks = [
    {
      label: "EMAIL",
      value: "samawahidee@gmail.com",
      href: "mailto:samawahidee@gmail.com",
      icon: FaEnvelope,
    },
    {
      label: "LINKEDIN",
      value: "View my LinkedIn profile",
      href: "https://www.linkedin.com/in/samawahidee/",
      icon: FaLinkedinIn,
      external: true,
    },
    {
      label: "GITHUB",
      value: "View my GitHub projects",
      href: "https://github.com/Sama-wahidee/",
      icon: FaGithub,
      external: true,
    },
  ];

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
            {contactLinks.map((contact) => {
              const ContactIcon = contact.icon;

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="contact-link"
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                >
                  <span className="contact-icon">
                    <ContactIcon aria-hidden="true" />
                  </span>

                  <span className="contact-info">
                    <span className="contact-label">{contact.label}</span>

                    <span className="contact-value">{contact.value}</span>
                  </span>

                  <FiArrowUpRight
                    className="contact-arrow"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
