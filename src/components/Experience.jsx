function Experience() {
  const experiences = [
    {
      number: "01",
      period: "FREELANCE",
      type: "SOFTWARE DEVELOPMENT",
      title: "Freelance Full-Stack Developer",
      description:
        "Developed web applications based on client requirements, communicating directly with clients to understand their needs and translate them into practical software solutions. Managed development, testing, feedback, and improvements to deliver applications aligned with project requirements.",
      technologies: ["React", "JavaScript", "Node.js", "Python", "SQL", "Git"],
    },
    {
      number: "02",
      period: "GRADUATION PROJECT",
      type: "BIRZEIT UNIVERSITY",
      title: "Murab — QA & Project Management",
      description:
        "Worked as part of a development team to build Murab, an integrated equestrian platform. Responsible for quality assurance, testing system functionality, reviewing requirements, identifying issues, and coordinating with stakeholders to ensure the final system met project requirements.",
      technologies: [
        "QA Testing",
        "Requirements Analysis",
        "Project Management",
        "React",
        "Node.js",
        "FastAPI",
        "MySQL",
      ],
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">EXPERIENCE</p>

          <h2>Experience</h2>

          <p className="section-intro">
            Practical experience in software development, quality assurance, and
            working with real-world requirements.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-item" key={experience.number}>
              <div className="experience-number">{experience.number}</div>

              <div className="experience-period">{experience.period}</div>

              <div className="experience-content">
                <p className="experience-type">{experience.type}</p>

                <h3>{experience.title}</h3>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
