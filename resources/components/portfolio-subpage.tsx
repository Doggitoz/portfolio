import { portfolioItems } from "../data/portfolio-items";

export default function PortfolioSubpage() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">A few things made with care</p>
          <h2 id="work-title">Things I&apos;ve made<span>.</span></h2>
        </div>
        <p className="section-aside">
          I&apos;m always working on something new.
        </p>
      </div>
      <p className="work-intro">
        Different forms, different people. The question underneath is usually
        the same: can this make someone&apos;s life a little better?
      </p>

      <div className="project-grid">
        {portfolioItems.map((item, index) => (
          <article className="project-card" key={item.title}>
            <div className={`project-art project-art-${item.art}`} aria-hidden="true">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="project-art-caption">{item.artCaption}</span>
              <div className="project-art-scene">
                <span className="scene-sun" />
                <span className="scene-shape scene-shape-one" />
                <span className="scene-shape scene-shape-two" />
                <span className="scene-shape scene-shape-three" />
                <span className="scene-ground" />
              </div>
              <span className="project-art-bottom">{item.category}</span>
            </div>

            <div className="project-details">
              <p className="project-category">{item.category}</p>
              <h3>{item.title}</h3>
              <p className="project-description">{item.description}</p>
              <p className="project-role">
                <span>My part</span>
                {item.role}
              </p>
              <p className={`project-note project-note-${item.art}`}>
                {item.note}
              </p>
              {item.href && (
                <a
                  className="project-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.linkLabel} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
