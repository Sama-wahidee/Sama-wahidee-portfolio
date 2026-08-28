function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML / CSS",
        "React-Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      number: "02",
      title: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs"],
    },
    {
      number: "03",
      title: "Databases",
      skills: ["MySQL", "MariaDB", "SQL"],
    },
    {
      number: "04",
      title: "Tools & Other",
      skills: ["Git / GitHub", "Figma", "AWS", "Electron", "VIKOR MCDM"],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">SKILLS</p>

          <h2>Technologies I work with</h2>

          <p className="section-intro">
            A practical toolkit built through academic, freelance, and project
            work.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.number}>
              <div className="skill-group-number">{group.number}</div>

              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
