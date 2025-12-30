export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* About */}
      <section className="section">
        <h2 className="section-title">About</h2>
        <p className="about-text">
          Building scalable EdTech platforms with 20,000+ users. Passionate about real-time systems, clean architecture, and developer experience.
        </p>
      </section>

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skill-group">
          <h3 className="skill-label">Frontend</h3>
          <div className="skill-tags">
            <span className="tag">TypeScript</span>
            <span className="tag">React</span>
            <span className="tag">Redux</span>
            <span className="tag">GraphQL</span>
          </div>
        </div>
        <div className="skill-group">
          <h3 className="skill-label">Backend</h3>
          <div className="skill-tags">
            <span className="tag">Node.js</span>
            <span className="tag">GraphQL</span>
            <span className="tag">MongoDB</span>
            <span className="tag">WebSockets</span>
          </div>
        </div>
        <div className="skill-group">
          <h3 className="skill-label">Tools</h3>
          <div className="skill-tags">
            <span className="tag">Docker</span>
            <span className="tag">Git</span>
            <span className="tag">Jest</span>
            <span className="tag">Amplitude</span>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="section">
        <h2 className="section-title">Languages</h2>
        <div className="lang-item">
          <div className="lang-header">
            <span className="lang-name">English</span>
            <span className="lang-badge native">Native</span>
          </div>
          <div className="lang-bar">
            <div className="lang-fill" style={{ width: '100%' }}></div>
          </div>
        </div>
        <div className="lang-item">
          <div className="lang-header">
            <span className="lang-name">中文</span>
            <span className="lang-badge fluent">Fluent</span>
          </div>
          <div className="lang-bar">
            <div className="lang-fill" style={{ width: '95%' }}></div>
          </div>
          <span className="lang-skills">Read · Write · Speak</span>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="edu-item">
          <p className="edu-school">Lighthouse Labs</p>
          <p className="edu-degree">Full Stack Web Developer</p>
          <p className="edu-year">2019</p>
        </div>
        <div className="edu-item">
          <p className="edu-school">University of Toronto</p>
          <p className="edu-degree">Honours B.A.Sc.</p>
          <p className="edu-year">2015</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-item">
          <p className="cert-name">UC Berkeley Extension</p>
          <p className="cert-detail">Computer Science</p>
          <p className="cert-year">2018 – 2019</p>
        </div>
        <div className="cert-item">
          <p className="cert-name">Oracle Certified Associate</p>
          <p className="cert-detail">Java SE 8 Programmer</p>
          <p className="cert-year">2017</p>
        </div>
      </section>
    </aside>
  )
}
