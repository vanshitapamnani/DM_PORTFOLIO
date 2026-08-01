import "../styles/main.css";
import { SocialIcon } from "react-social-icons";
import { FiExternalLink } from "react-icons/fi";

function Intro({ handleNext }) {
  return (
    <>
      <div className="profile">
        <img src="image/profile.png" alt="profile" />
        <p className="name">Vanshita Pamnani</p>
        <div className="intro">
          <h3>
            A CREATIVE DIGITAL MARKETER PASSIONATE ABOUT TURNING IDEAS INTO
            IMPACTFUL CAMPAIGNS. FROM PERFORMANCE MARKETING TO CONTENT STRATEGY,
            I LOVE BUILDING STORIES THAT DRIVE RESULTS.
          </h3>
          <p> ✨ Create. Engage. Convert. Repeat. ✨</p>
          <div>
            <p> Fell Free To Connect.</p>
            <div className="info-outer">
              {/* <SocialIcon url="https://github.com/vanshitapamnani" /> */}
              <SocialIcon url="https://www.linkedin.com/in/vanshita-pamnani/" />

              {/* <SocialIcon url="www.youtube.com/@vanshita_pamnani" /> */}
              <SocialIcon url="https://discord.com/users/1388935183243284480" />
              <SocialIcon url="https://www.instagram.com/vanshita_pamnani?igsh=bmtzZWNtNTVxZmU%3D&utm_source=qr" />
              <SocialIcon url="https://www.reddit.com/user/Calm_Console/ " />
            </div>
          </div>
          {/* Start from here NEXT ...*/}
          <div className="resume-link">
            <a href="DM_RESUME.pdf" target="_blank">
              View Resume <FiExternalLink />
            </a>
          </div>
          <div className="button-container">
            <button onClick={handleNext}>Next </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
