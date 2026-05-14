import "../styles/about.css";

function About({ handleNext }) {
  return (
    <>
      <div className="about">
        <p className="about-text">
          I’m Vanshita Pamnani, a{" "}
          <span className="highlight">Digital Marketing Enthusiast </span>
          passionate about building{" "}
          <span className="highlight">creative campaigns</span> and crafting{" "}
          <span className="highlight">impactful brand experiences</span>. I
          enjoy blending <span className="highlight">strategy</span>,
          <span className="highlight"> storytelling</span>, and
          <span className="highlight"> performance marketing</span> to create
          content and campaigns that truly connect with audiences. From{" "}
          <span className="highlight">social media marketing</span> to{" "}
          <span className="highlight">paid advertising</span> and{" "}
          <span className="highlight">brand communication</span>, I’m constantly
          exploring new ways to drive engagement, growth, and digital impact.
          Currently, I’m sharpening my skills in{" "}
          <span className="highlight">Performance Marketing</span>,
          <span className="highlight"> Google Ads</span>, and
          <span className="highlight"> content strategy</span> while working on
          projects that help me grow as a modern digital marketer.
        </p>

        <p>
          Digital Marketing Enthusiast | Performance Marketing Learner |
          Building Brands Digitally
        </p>
        <div>
          {" "}
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}

export default About;
