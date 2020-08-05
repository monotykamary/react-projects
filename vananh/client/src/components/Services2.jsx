import React from "react";
import Carousel from "./Carousel";
import { Container } from "reactstrap";

export default function Services2 (){
    return(
        <div>
            <Carousel/>
            <div className="subComponent" id="aboutBody">
          <Container>
            <header className="headerTitle text-center">
              <h1>Dịch vụ</h1>
              <p>abc</p>
            </header>
            </Container>
            </div>
        </div>
    )
}