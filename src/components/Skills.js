import "../styles/skills.css";

function Skills({ handleNext }) {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <img src="image/googleADs.png" alt="Google Ads" />
          <p>GOOGLE ADS</p>
        </div>

        <div className="inner-container">
          <img src="image/meta.png" alt="Meta Ads" />
          <p>META ADS</p>
        </div>

        <div className="inner-container">
          <img src="image/googleAnalytics.png" alt="Google Analytics" />
          <p>GOOGLE ANALYTICS</p>
        </div>

        <div className="inner-container">
          <img src="image/tagManager.png" alt="Google Tag Manager" />
          <p>GOOGLE TAG MANAGER</p>
        </div>

        <div className="inner-container">
          <img src="image/performance.png" alt="Performance Marketing" />
          <p>PERFORMANCE MARKETING</p>
        </div>

        <div className="inner-container">
          <img src="image/socialmedia.png" alt="Social Media Marketing" />
          <p>SOCIAL MEDIA MARKETING</p>
        </div>

        <div className="inner-container">
          <img src="image/landingPage.png" alt="Landing Page Analysis" />
          <p>LANDING PAGE ANALYSIS</p>
        </div>

        <div className="inner-container">
          <img src="image/campaignStrategy.png" alt="Campaign Strategy" />
          <p>CAMPAIGN STRATEGY</p>
        </div>

        <div className="inner-container">
          <img src="image/canva.svg" alt="Canva" />
          <p>CANVA</p>
        </div>

        <div className="inner-container">
          <img src="image/creative.png" alt="Content Marketing" />
          <p>CONTENT MARKETING</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default Skills;
