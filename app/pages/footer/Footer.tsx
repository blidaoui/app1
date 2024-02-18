import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="">
          <br />
          <h5 style={{ marginLeft: "61px" }}>Télécharger notre application</h5>
          <br />
          <div>
            <ul className="social-icon">
              <ul>
                <a href="https://play.google.com/store/apps/details?id=com.softavera.pizzatime&hl=ln">
                  <img
                    src="https://www.commande-pizzatime.fr/CESARWEB_WEB/play_store-icon.png"
                    alt="play Store"
                    width="237px"
                    height="82px"
                  />
                </a>
                <br />
                <br />
                <a href="https://apps.apple.com/us/app/pizza-time-france/id1556496063">
                  <img
                    src="https://www.commande-pizzatime.fr/CESARWEB_WEB/app_store_icon.png"
                    alt="Google Play Store"
                    width="237px"
                    height="82px"
                  />
                </a>
              </ul>
            </ul>
          </div>
        </div>

        <div className="footer-links">
          <ul>
            <br />
            <br />
            <a href="" style={{"cursor": "pointer"}}>Mentions légales</a>
            <br />

            <a>Politique de confidentialité</a>
            <br />

            <a>CGV</a>
            <br />

            <a>CGU</a>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Suivez-nous</h4>
          <div>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/PizzaTimeFrance/">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    height="35px"
                    width="40px"
                    className="icon facebook-icon"
                  />
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/pizzatimefrance/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    height="35px"
                    width="35px"
                    // className="icon instagram-icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p style={{ marginLeft: "185px" }}>
          Tous droits réservés - ® 2024 V 3.1{" "}
        </p>
        <p style={{ marginLeft: "185px" }}>
          Softavera N°1 des solutions d encaissement, caisse tactile, borne de
          commande, click & collect, site web commande en ligne..., plus d’infos
          :{""}
          <a href="https://softavera.fr/">www.softavera.fr</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;