import "../styles/contact.css";

function Contact({ handleNext }) {
  const links = [
    { name: "📩 Email", url: "mailto:pamnanivanshita20@gmail.com" },
    // { name: "💻 GitHub", url: "https://github.com/vanshitapamnani" },
    {
      name: "🔗 LinkedIn",
      url: "https://www.linkedin.com/in/vanshita-pamnani/",
    },
  ];
  return (
    <>
      <div className="contact-outer">
        <div className="contact-inner">
          <div className="contact-heading">
            <h1>Let’s Connect 😄</h1>

            <p>
              I’m always excited to connect with people who are passionate about
              marketing, creativity, and building impactful digital experiences.
              Whether you have an opportunity, a collaboration idea, or simply
              want to discuss digital marketing and performance strategies, feel
              free to reach out. I’d love to connect, learn, and create
              something meaningful together.
            </p>
          </div>

          {/* <p>📩 Email - pamnanivanshita@gmail.com</p> */}
          {/* <p>🔗 LinkedIn - https://www.linkedin.com/in/vanshitapamnani/ </p>
          <p>💻 GitHub - https://github.com/vanshitapamnani</p> */}
          <div className="contact-links">
            {links.map((link, index) => (
              <a key={index} href={link.url}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleNext}>Back to Home</button>
      </div>
    </>
  );
}

export default Contact;
