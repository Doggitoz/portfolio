import PortfolioSubpage from "../resources/components/portfolio-subpage";

const navigation = [
  { label: "Things I've made", href: "#work" },
  { label: "A little about me", href: "#about" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Doggitoz" },
  { label: "itch.io", href: "https://doggitoz.itch.io/" },
  { label: "Instagram", href: "https://www.instagram.com/ton.of.coal/" },
];

export default function Home() {
  return (
    <>
      <header className="site-header" id="top">
        <a className="wordmark" href="#top" aria-label="Coleton Wheeler, home">
          <svg className="wordmark-leaf" viewBox="0 0 36 36" aria-hidden="true">
            <path d="M7 28C8 17 16 8 29 7c0 13-8 21-19 22m-3-1 18-18" />
            <path d="M12 23c-1-5-4-7-7-8 0 4 2 8 6 10m8-9c3 0 6 1 8 4" />
          </svg>
          <span>Coleton Wheeler</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-note-link" href="mailto:coleton.wheeler@gmail.com">
            Say hello <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Maker · creative · team-builder</p>
            <h1 id="hero-title">
              I build software.
              <span className="hero-subtitle">
                With people, for people.
              </span>
            </h1>
            <p className="hero-description">
              I&apos;m Coleton Wheeler. I want to bring people together to make
              thoughtful things for humans—things that help us feel valued,
              capable, and a little less alone.
            </p>
            <div className="hero-links">
              <a className="text-link" href="#work">
                Come see what I&apos;ve made <span aria-hidden="true">↓</span>
              </a>
              <span className="hero-location">Rooted in Tulsa, curious about everywhere</span>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="forest-moon" />
            <div className="forest-hill forest-hill-back" />
            <div className="forest-hill forest-hill-front" />
            <div className="forest-trunk forest-trunk-left" />
            <div className="forest-trunk forest-trunk-right" />
            <div className="forest-canopy forest-canopy-left" />
            <div className="forest-canopy forest-canopy-right" />
            <div className="forest-fern forest-fern-left">
              <i /><i /><i /><i /><i />
            </div>
            <div className="forest-fern forest-fern-right">
              <i /><i /><i /><i /><i />
            </div>
          </div>
        </section>

        <div className="soft-divider" aria-hidden="true">
          <span />
          <svg viewBox="0 0 100 24">
            <path d="M2 21C31 20 38 3 51 4c15 1 17 16 47 16M46 8l-5-5m9 5 5-5M34 14l-7-2m42 2 7-3" />
          </svg>
          <span />
        </div>

        <PortfolioSubpage />

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-intro">
            <p className="eyebrow">A little about me</p>
            <h2 id="about-title">
              Technology should bring us closer to being <em>human.</em>
            </h2>
          </div>
          <div className="about-story">
            <p>
              As AI and social platforms pull more of life online, it&apos;s easy
              to build things that hold our attention without bringing us
              closer. I want to make software that does the opposite: helps
              people feel valued, empowered, and connected in the real world.
            </p>
            <p>
              That might mean helping someone move on from a sentimental
              belonging, giving a player a world to get lost in, or helping a
              neighbor discover a local business. Different projects, same
              question: <em>does this make life better for the people using it?</em>
            </p>
            <p>
              I love making things, and I love bringing a team together around
              an idea. I&apos;ve led software architecture from first sketch to
              deployment, built game systems, and gotten out into the community
              to talk with the people a project is for.
            </p>
            <p className="about-now">
              <span className="now-leaf" aria-hidden="true" />
              Based in Tulsa; open to remote work and new communities.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-art" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-title">
            Let&apos;s talk.
          </h2>
          <p>
            If you have thoughts, experiences, or ideas about how technology
            could bring people together instead of pulling them apart, I&apos;d
            genuinely love to hear them. Feel free to send me an email or a DM.
          </p>
          <div className="contact-links">
            <a className="contact-email" href="mailto:coleton.wheeler@gmail.com">
              coleton.wheeler@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <a
              className="contact-linkedin"
              href="https://www.linkedin.com/in/coleton-wheeler/"
              target="_blank"
              rel="noreferrer"
            >
              Find me on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#top">
          <svg className="wordmark-leaf" viewBox="0 0 36 36" aria-hidden="true">
            <path d="M7 28C8 17 16 8 29 7c0 13-8 21-19 22m-3-1 18-18" />
            <path d="M12 23c-1-5-4-7-7-8 0 4 2 8 6 10m8-9c3 0 6 1 8 4" />
          </svg>
          <span>Coleton Wheeler</span>
        </a>
        <nav className="footer-socials" aria-label="Other places to find me">
          <span>Elsewhere</span>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </nav>
        <a href="#top" className="back-to-top">Back to the top ↑</a>
      </footer>
    </>
  );
}
