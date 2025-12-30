export default function ExperienceTab() {
  return (
    <>
      <article className="job">
        <div className="job-header">
          <div>
            <h3 className="job-title">Software Engineer</h3>
            <p className="job-company">Meeopp</p>
          </div>
          <span className="job-date">2021 – Present</span>
        </div>
        <ul className="job-details">
          <li>EdTech platform serving 20,000+ users across 60 organizations (B2B, B2C, internal tools)</li>
          <li>Owned the 1-to-1 lesson booking system, one of three core product pillars, processing 50,000+ lessons</li>
          <li>Co-built live streaming infrastructure and lesson recordings with privacy and access controls</li>
          <li>Optimized B2B quota system aggregation from 8s to near-instant via caching strategies</li>
          <li>Built reusable Amplitude hooks for frontend tracking and backend event methods</li>
        </ul>
      </article>

      <article className="job">
        <div className="job-header">
          <div>
            <h3 className="job-title">Junior Software Engineer</h3>
            <p className="job-company">Meeopp</p>
          </div>
          <span className="job-date">2019 – 2021</span>
        </div>
        <ul className="job-details">
          <li>Built features across the full stack using React, Node.js, and MongoDB</li>
          <li>Participated in design and code reviews with senior engineers</li>
        </ul>
      </article>

      <article className="job">
        <div className="job-header">
          <div>
            <h3 className="job-title">Software Intern</h3>
            <p className="job-company">DeepMotion · Redwood City, CA</p>
          </div>
          <span className="job-date">2018</span>
        </div>
        <ul className="job-details">
          <li>Built a Unity game using 3D characters trained with reinforcement learning for procedural animation</li>
        </ul>
      </article>

      <article className="job">
        <div className="job-header">
          <div>
            <h3 className="job-title">Product Manager</h3>
            <p className="job-company">Sihuan Pharmaceuticals · Beijing, China</p>
          </div>
          <span className="job-date">2016 – 2017</span>
        </div>
        <ul className="job-details">
          <li>Led product analysis and marketing strategy for pharmaceutical products</li>
          <li>Delivered presentations to audiences of 100+ people on drug research</li>
          <li>Conducted market research and interviewed senior medical professionals</li>
          <li>Promoted and increased sales of CFDA approved drugs</li>
        </ul>
      </article>
    </>
  )
}
