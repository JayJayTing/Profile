import Image from 'next/image'

export default function AboutMeTab() {
  return (
    <div className="about-me-content">
      {/* Profile Card */}
      <div className="profile-card">
        <Image
          src="/profile.png"
          alt="Jay Jay Ting"
          width={100}
          height={100}
          className="profile-image"
          unoptimized
        />
        <a
          href="https://www.instagram.com/jzizzles"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
          @jzizzles
        </a>
      </div>

      {/* Bio */}
      <div className="bio-content">
        <p>
          I grew up across three continents—Sydney for elementary school at SCECGS Redlands, Shanghai for high school at SAS, and Toronto for university at U of T where I studied Human Biology. Moving around taught me to adapt quickly and feel at home in new environments.
        </p>
        <p>
          Swimming was a big part of my life growing up. As a varsity athlete, I trained under an Olympic-level coach who emphasized technique and consistency. That approach stuck with me—I like putting in the work to do things properly rather than cutting corners.
        </p>
        <p>
          These days, I'm into golf—enough that I flew out to Irvine for TPI Level 3 certification. I also picked up freediving (3-minute breath hold, PADI certified) and enjoy tennis and fitness. When I want to unwind, it's video games—Mario Kart and TFT lately, though I've played everything from Overwatch to Binding of Isaac over the years.
        </p>
        <p>
          I'm naturally curious and like figuring out how things work. I'm always looking for ways to simplify tasks and automate the repetitive stuff—freeing up time to focus on the problems that actually matter. Whether it's a technical challenge or a new skill, I enjoy the process of working through it.
        </p>
      </div>
    </div>
  )
}
