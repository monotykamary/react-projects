import React from "react";
import Carousel from "./Carousel";
import { Container } from "reactstrap";

export default function Intro (){
    return(
        <div>
            <Carousel/>
            <div className="subComponent" id="aboutBody">
          <Container>
            <header className="headerTitle text-center">
              <h1>Giới thiệu</h1>
              <p>abc</p>
            </header>
            </Container>
            </div>
        </div>
    )
}