function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>
          <h2>Building practical solutions with purpose.</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Computer Science graduate from Birzeit University,
              specializing in full-stack development with React, Node.js, and
              MySQL.
            </p>

            <p>
              I enjoy building practical, user-focused applications that solve
              real problems — from web platforms and REST APIs to desktop
              applications.
            </p>

            <p>
              I also have a strong interest in software quality and testing,
              with experience applying unit, integration, black-box, and
              white-box testing across academic and client projects.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <div className="about-icon">✦</div>
              <div>
                <h3>Problem Solver</h3>
                <p>
                  I enjoy turning complex problems into practical solutions.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">↗</div>
              <div>
                <h3>Full-Stack</h3>
                <p>
                  Comfortable working across frontend, backend, and databases.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">✓</div>
              <div>
                <h3>Quality Focused</h3>
                <p>I care about reliable software and thorough testing.</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">+</div>
              <div>
                <h3>Continuous Learner</h3>
                <p>
                  Always exploring new technologies and better ways to build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
