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
          priority
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
          I've been lucky to call three continents home—Sydney for elementary school at SCECGS Redlands, Shanghai for high school at SAS, and Toronto for university at U of T where I studied Human Biology. Each chapter brought new adventures and taught me to thrive in unfamiliar places!
        </p>
        <p>
          Swimming shaped who I am. As a varsity athlete, I trained under an Olympic-level coach who instilled a love for technique and the joy of steady improvement. That mindset carries into everything I do—I genuinely enjoy the process of getting better, and I'm always excited to put in the work to build something right.
        </p>
        <p>
          These days, I'm all about golf—I loved it so much I flew out to Irvine for TPI Level 3 certification! I also discovered freediving and hit a 3-minute breath hold (PADI certified so I can explore the best spots). Tennis, fitness, and the mind-body connection keep me energized. And for fun? Video games—currently hooked on Mario Kart and TFT, though I've spent countless hours on everything from Overwatch to Binding of Isaac.
        </p>
        <p>
          I'm naturally curious and love figuring things out. Whether it's optimizing a system or learning a new skill, I get excited about the challenge and the growth that comes with it.
        </p>
      </div>
    </div>
  )
}
