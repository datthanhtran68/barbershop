import { ABOUT_TEAM } from '@/constants/about_team';

const AboutTeam = () => {
  return (
    <section className="about-team">
      <div className="container">
        <div className="team-header">
          <span className="sub-title">Đội ngũ của chúng tôi</span>
          <h2 className="main-heading">Gặp gỡ các chuyên gia</h2>
          <div className="description">
            <p>Đội ngũ lành nghề của chúng tôi với nhiều năm kinh nghiệm và niềm đam mê với nghề cắt tóc</p>
          </div>
        </div>
        
        <div className="team-grid">
          {ABOUT_TEAM.map((member, index) => (
            <div 
              key={index} 
              className="team-card" 
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
