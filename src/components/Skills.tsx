import './Skills.css';

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Expertise</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3 className="skill-subtitle">Tourism Skills</h3>
            <ul>
              <li>✔️ Certified Tour Guide in the Holy Land</li>
              <li>🌍 Multilingual: Arabic, English, Hebrew</li>
              <li>🧭 Deep cultural & historical knowledge</li>
              <li>🤝 Group & private tour experience</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3 className="skill-subtitle">Technical Skills</h3>
            <ul>
              <li>💻 Full Stack Web Development (React, Node.js)</li>
              <li>🛠️ TypeScript, JavaScript, Git, MongoDB</li>
              <li>📦 REST APIs, Vite, Firebase, Netlify</li>
              <li>🎓 IBM & Coursera Certifications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
