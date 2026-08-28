import cvFile from "../assets/Sama-Wahidee-CV.pdf";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="logo">
          Sama Wahidee
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href={cvFile} download="Sama-Wahidee-CV.pdf" className="nav-cv">
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Navbar;
