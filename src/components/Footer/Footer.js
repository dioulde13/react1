import React from "react";
import lapin from "../../image/lapin.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./Footer.css";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*Column1 */}
          <div className="col">
            <h4>Meilleures Communes</h4>
            <ul className="list-unstyled">
              <li>
                <a href="page2.html">Kaloum</a>
              </li>
              <li>
                <a href="page2.html">Matam</a>
              </li>
              <li>
                <a href="page2.html">Ratoma</a>
              </li>
              <li>
                <a href="page2.html">Matoto</a>
              </li>
            </ul>
          </div>

          {/*Column2 */}
          <div className="col">
            <h4>Meilleures cuisines à proximité</h4>
            <ul className="list-unstyled">
              <li>
                <a href="page2.html">Pizza à proximité</a>
              </li>
              <li>Cuisine chinoise à proximité</li>
              <li>Sushi à proximité</li>
              <li>Café à proximité</li>
            </ul>
          </div>

          {/*Column3 */}
          <div className="col">
            <h4>Meilleures cuisines à proximité</h4>
            <ul className="list-unstyled">
              <li>Pizza à proximité</li>
              <li>Cuisine chinoise à proximité</li>
            </ul>
          </div>

          {/*Column4 */}
          <div className="col">
            <h4>Apprendre a nous connaitre</h4>
            <ul className="list-unstyled">
              <li>Pizza à proximité</li>
              <li>Cuisine chinoise à proximité</li>
              <li>Cuisine mexicaine à proximité</li>
            </ul>
          </div>

          {/*Column5 */}
          <div className="col">
            <h4>Laissez-nous vous aider</h4>
            <ul className="list-unstyled">
              <li>Pizz</li>
              <li>Cuisine chinoise </li>
              <li>Cuisine mexicaine </li>
            </ul>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} THICC MEMES INC | All right
              reserved | Terms of Service |Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
