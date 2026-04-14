import React from 'react';
import AboutHero from './about/AboutHero';
import AboutStory from './about/AboutStory';
import AboutStats from './about/AboutStats';
import AboutTeam from './about/AboutTeam';

function About() {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutTeam />
    </main>
  );
}

export default About;
