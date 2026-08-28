function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">HELLO, I'M</p>

          <h1>Sama Wahidee</h1>

          <h2>Full-Stack Software Engineer</h2>

          <p className="hero-description">
            I build production-ready web and desktop applications, from database
            design and REST APIs to responsive interfaces and cross-platform
            desktop applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <span>→</span>
            </a>

            <a
              href="/Sama-Wahidee-CV.pdf"
              className="btn btn-secondary"
              download
            >
              ↓ Download CV
            </a>
          </div>

          <div className="hero-tech">
            <span>React</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>MySQL</span>
            <span>•</span>
            <span>Python</span>
            <span>•</span>
            <span>FastAPI</span>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-shape"></div>

          <div className="profile-photo">
            <img
              src={`${import.meta.env.BASE_URL}images/sama-profile.png`}
              alt="Sama Wahidee"
            />{" "}
          </div>

          <div className="hero-note">
            "Turning ideas into
            <br />
            real solutions."
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
