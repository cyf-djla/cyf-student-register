import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./index.css";

function Footer() {
  return (
    <footer>
      <div className="rounded-social-buttons">
        <a className="social-button facebook" href="https://www.facebook.com/codeyourfuture.io/?locale=en_GB" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a className="social-button twitter" href="https://twitter.com/codeyourfuture?lang=en" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="social-button linkedin" href="https://www.linkedin.com/company/codeyourfuture/?originalSubdomain=uk" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="social-button instagram" href="https://www.instagram.com/codeyourfuture_/?hl=en" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="social-button youtube" href="https://www.youtube.com/channel/UCcSWVMCzKDu3tDeV2kT3kcw" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
