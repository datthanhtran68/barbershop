import { ABOUT_STORY } from '@/constants/about_story';

const AboutStory = () => {
  return (
    <section className="about-story-section">
      <div className="about-story-container">
        {/* KHỐI ẢNH BÊN TRÁI */}
        <div className="about-story-image">
          <img src={ABOUT_STORY.image} alt="Story" />
        </div>

        {/* KHỐI CHỮ BÊN PHẢI */}
        <div className="about-story-content">
          <span className="about-story-subtitle">{ABOUT_STORY.subTitle}</span>
          <h2 className="about-story-title">{ABOUT_STORY.title}</h2>
          <div className="about-story-paragraphs">
            {ABOUT_STORY.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
