// Importing necessary dependencies and components from React and FontAwesome
import React from "react";
import FooterCss from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Importing the logo image
import logo from '../../assets/images/logo/logo2.svg'

// Functional component representing the footer section of the application
function Footer() {
  // Style for the social media icons
  const iconStyle = { color: "white" };

  return (
    <footer className={FooterCss.footer}>
      {/* Container for the footer content */}
      <div className={FooterCss.footerContainer}>
        {/* Logo section */}
        <div className={FooterCss.logo}>
          <img className={FooterCss.Logo} src={logo} alt="/" />
        </div>
        {/* Description section */}
        <div className={FooterCss.description}>
          <p className={FooterCss.secondPara}>
            Build strength and confidence at our gym with state-of-the-art
            equipment, personalized training, and a motivating community
          </p>
        </div>
        {/* Address section */}
        <div className={FooterCss.address}>
          <h4 className={FooterCss.adressh4}>Address</h4>
          <p className={FooterCss.p3}>Republic of Belarus</p>
          <p className={FooterCss.p3}>Minsk city</p>
          <p className={FooterCss.p3}>Dzerzhinsky Avenue 15</p>
        </div>
        {/* Contact section */}
        <div className={FooterCss.contact}>
          <h4 className={FooterCss.adressh4}>Contact</h4>
          {/* Phone */}
          <div className={FooterCss.phone}>
            <a href="tel:+375447772412" className={FooterCss.icon}>
              <FontAwesomeIcon icon={faPhone} style={iconStyle} />
            </a>
            <span className={FooterCss.span}>+375(44)-777-24-12</span>
          </div>
          {/* Email */}
          <div className={FooterCss.email}>
            <a href="mailto:gym24@gmail.com" className={FooterCss.icon}>
              <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
            </a>
            <span className={FooterCss.span}>gym24@gmail.com</span>
          </div>
        </div>
        {/* Follow Us section */}
        <div className={FooterCss.follow}>
          <h4 className={FooterCss.followUs}>Follow Us</h4>
          {/* Social media icons */}
          <div className={FooterCss.socialIcon}>
            {/* Instagram */}
            <a href="link to instagram" target="_blank" className={FooterCss.icon}>
              <FontAwesomeIcon icon={faInstagram} size="2x" style={iconStyle} />
            </a>
            {/* Facebook */}
            <a href="link to facebook" target="_blank" className={FooterCss.icon}>
              <FontAwesomeIcon icon={faFacebook} size="2x" style={iconStyle} />
            </a>
            {/* Twitter */}
            <a href="link to twitter" target="_blank" className={FooterCss.icon}>
              <FontAwesomeIcon icon={faTwitter} size="2x" style={iconStyle} />
            </a>
            {/* YouTube */}
            <a href="link to youtube" target="_blank" className={FooterCss.icon}>
              <FontAwesomeIcon icon={faYoutube} size="2x" style={iconStyle} />
            </a>
          </div>
        </div>
      </div>
      {/* Copy right section */}
      <div className={FooterCss.copyRight}>
        <p>&copy;FITHUB 2023. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Exporting the Footer component
export default Footer;
