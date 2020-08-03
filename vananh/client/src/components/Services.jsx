import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import SecondCarousel from './Carousel2';
import MainCarousel from "./Carousel";
import { ReactComponent as Trending } from "../assets/svg/trending-up.svg";
import { ReactComponent as Flag } from "../assets/svg/flag.svg";
import { ReactComponent as Monitor } from "../assets/svg/monitor.svg";
import { ReactComponent as MapPin } from "../assets/svg/map-pin.svg";

class Services extends Component {
  render() {
    return (
      <div className="wrapped-services">
        <div className="subComponent" id="servicesBody">
          <Container>
            <section className="svg-group text-center">
              <Row>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <Trending width="50" height="55" strokeWidth="1" />
                    <p>Được đánh giá cao</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <Monitor width="55" height="55" strokeWidth="1" />
                    <p>Tiện lợi</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <Flag width="55" height="55" strokeWidth="1" />
                    <p>Tour đa dạng</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <MapPin width="55" height="55" strokeWidth="1" />
                    <p>Nhiều chi nhánh</p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      </div>
    );
  }
}

export default Services;
