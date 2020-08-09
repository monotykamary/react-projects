import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {Link} from 'react-router-dom'
import "../App.css";
import { ReactComponent as Facebook } from "../assets/svg/facebook_new.svg";
import { ReactComponent as Twitter } from "../assets/svg/twitter_new.svg";
import { ReactComponent as Linkedin } from "../assets/svg/lkin.svg";
import { ReactComponent as Instagram } from "../assets/svg/insta_new.svg";
import { ReactComponent as Zalo } from "../assets/svg/zalo_new.svg";
class Footer extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="footerBody">
        <Container>
          <header className="headerTitle text-center">
            <p>
              <b>CÒN CHẦN CHỪ GÌ NỮA</b>
            </p>
            <p>
              <b>HÃY LIÊN HỆ VỚI CHÚNG TÔI</b>
            </p>
          </header>
          <footer className="svg-group text-center">
            <Row>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://www.facebook.com/tran.vananh.5095">
                    <Facebook color="#3B5998" width="50" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Twitter color="#00acee" width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Instagram color="#405DE6" width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Zalo color="#405DE6" width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
            </Row>
            <hr />
            <br />
            <p>Created by Nam Tran</p>
            <p>Copyright Reserved | Vân Anh Tourism</p>
          </footer>
        </Container>
      </div>
    );
  }
}

export default Footer;
