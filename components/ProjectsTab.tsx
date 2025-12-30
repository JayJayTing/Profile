export default function ProjectsTab() {
  return (
    <>
      <article className="job">
        <div className="job-header">
          <div>
            <h3 className="job-title">Raptors Ticket</h3>
            <p className="job-company">
              <a href="https://www.raptorsticket.com" target="_blank" rel="noopener noreferrer">
                raptorsticket.com
              </a>
            </p>
          </div>
          <span className="job-date">2019</span>
        </div>
        <ul className="job-details">
          <li>Platform for season ticket holders to sell tickets to potential buyers</li>
          <li>Built with React, Redux, Firebase (Auth, Database, Cloud Functions), Twilio SMS</li>
          <li>Designed and implemented NoSQL database and all cloud functions</li>
        </ul>
      </article>

      <article className="job">
        <div className="job-header">
          <div>
            <h3 className="job-title">Woodpecker Games</h3>
            <p className="job-company">Multiplayer Game Platform</p>
          </div>
          <span className="job-date">2019</span>
        </div>
        <ul className="job-details">
          <li>Website hosting multiplayer game instances with social features (profiles, friends, messaging)</li>
          <li>Built with React, Node.js, PostgreSQL, Socket.io, Phaser game engine</li>
          <li>Designed dynamic game room system for real-time multiplayer gameplay</li>
        </ul>
      </article>
    </>
  )
}
