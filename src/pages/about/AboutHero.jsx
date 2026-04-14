import { ABOUT_HERO } from '@/constants/about_hero';

function AboutHero() {
  return (
    <section className="about_hero">
      <img src={ABOUT_HERO.bgImage} alt="About Hero" className="about_hero-bg" />
      <div className="about_hero-overlay" />
      <div className="about_hero-content">
        <h1 className="about_hero-title">
          {ABOUT_HERO.title}
        </h1>
        <p className="about_hero-desc">
          {ABOUT_HERO.desc}
        </p>
      </div>
    </section>
  );
}

export default AboutHero;
