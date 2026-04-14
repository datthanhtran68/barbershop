import { ABOUT_STATS } from '@/constants/about_stats';

const AboutStats = () => {
  return (
    <section className="about-stats">
      <div className="container">
        <div className="stats-container">
          {ABOUT_STATS.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
