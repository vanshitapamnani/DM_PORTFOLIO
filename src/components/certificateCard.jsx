import "../styles/certificateCard.css";

function CertificateCard({ certificate }) {
  return (
    <div className="certificate-card">
      <img
        src={certificate.image}
        alt={certificate.title}
        className="certificate-image"
      />

      <div className="certificate-overlay">
        <a
          href={certificate.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="view-btn">
          View Certificate
        </a>
      </div>

      <div className="certificate-info">
        <h3>{certificate.title}</h3>
        <p>{certificate.issuer}</p>
      </div>
    </div>
  );
}

export default CertificateCard;
