import React from "react";
import { Button } from "reactstrap";
import "../App.css";
const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>Du lịch ABC</h1>
          <h3>Khám phá | Trải nghiệm | Hưởng thụ</h3>
          <Button outline color="warning" href="#mainCarousel">
            Tìm hiểu thêm
          </Button>{" "}
        </div>
      </section>
    </main>
  </div>
);

export default Hero;
