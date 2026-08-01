import "../styles/certificate.css";
import CertificateCard from "./certificateCard";
function Certificate({ setSection }) {
  const certificates = [
    {
      title: "Introduction to Google Ads",
      issuer: "Simpli Learn",
      image: "/image/intro_google_ads_simplilearn.png",
      pdf: "/simplilearn_certificate.pdf",
    },
    {
      title: "Google Search Ads Certification",
      issuer: "Google Skillshop",
      image: "/image/google_ads_certificate.png",
      pdf: "/google_ads_search .pdf",
    },

    {
      title: "Google Measurement Ads Certification",
      issuer: "Google Skillshop",
      image: "/image/google_ads_measurement.png",
      pdf: "/measurement_certificate_google.pdf",
    },
  ];

  return (
    <div className="certificate-page">
      <h1>My Certifications</h1>

      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>

      <button className="back-btn" onClick={() => setSection("skills")}>
        ← Back to Skills
      </button>
    </div>
  );
}

export default Certificate;
