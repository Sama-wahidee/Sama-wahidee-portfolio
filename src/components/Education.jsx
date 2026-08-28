function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">EDUCATION</p>

          <h2>Academic background</h2>

          <p className="section-intro">
            A foundation in computer science supported by focused coursework and
            hands-on software development projects.
          </p>
        </div>

        <article className="education-item">
          <div className="education-number">01</div>

          <div className="education-content">
            <div className="education-header">
              <div>
                <p className="education-type">BACHELOR'S DEGREE</p>

                <h3>Computer Science</h3>

                <p className="education-university">
                  Birzeit University · Ramallah, Palestine
                </p>
              </div>

              <span className="education-date">2021 — 2025</span>
            </div>

            <p className="education-description">
              Studied computer science with a focus on software development, web
              technologies, databases, software engineering, and
              problem-solving.
            </p>

            <div className="education-courses">
              <p className="education-courses-label">RELEVANT ELECTIVES</p>

              <div className="education-course-list">
                <div className="education-course">
                  <h4>Software Quality Assurance & Testing</h4>
                  <p>
                    Unit, integration, black-box, and white-box testing
                    methodologies applied across course and client projects.
                  </p>
                </div>

                <div className="education-course">
                  <h4>Web Services</h4>
                  <p>
                    Designing and consuming SOAP/REST-based service
                    architectures.
                  </p>
                </div>

                <div className="education-course">
                  <h4>Serious Gaming (SG) Fundamentals</h4>
                  <p>
                    Game design principles applied to educational and training
                    simulations.
                  </p>
                </div>

                <div className="education-course">
                  <h4>Data Science and Analytics</h4>
                  <p>
                    Data wrangling, statistical analysis, and visualization for
                    decision-making.
                  </p>
                </div>

                <div className="education-course">
                  <h4>Sp. Topics: Encryption Theory</h4>
                  <p>Cryptographic algorithms and secure data transmission.</p>
                </div>

                <div className="education-course">
                  <h4>Animation</h4>
                  <p>
                    Motion and visual design fundamentals for interactive media.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
