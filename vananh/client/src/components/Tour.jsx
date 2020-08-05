import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import {NavItem} from 'reactstrap'
import { useSelector, useDispatch } from "react-redux";
import { detailsTours } from "../actions/tourActions";

const Tour = (props) => {
  const [tour, setTour] = useState([])
    const dispatch = useDispatch();

    const fetchData= async()=> {
        const ret=await dispatch(detailsTours(props.match.params.id));
        if(ret.status){
            setTour(ret.data)
            console.log(tour);
        }
    }
    
    useEffect(()=>{
        fetchData()
        return()=>{
            
        }
    },[])
    return(
      <div className="subComponent">
        <Container>
          <section className="tour-cover item-center">
            <img src={tour.image} alt="" />
            <h1>{tour.title}</h1>
            <p>Liên hệ</p>
            <NavItem className="a1">
                <Button href="/order" color="success">Đặt vé</Button>{" "}
            </NavItem>
          </section>
          <section className="tour-info">
            <Row>
              <Col sm="8">
                <div className="tour-desc">
                  <p>
                    {tour.context}
                  </p>
                </div>
              </Col>
              <Col sm="4">
                <div className="tour-gallery">
                  <a href={tour.image}>
                    <img src={tour.image2} alt="" />
                  </a>
                  <a href={tour.image2}>
                    <img src={tour.image2} alt="" />
                  </a>
                  <a href={tour.image3}>
                    <img src={tour.image2} alt="" />
                  </a>
                  <a href={tour.image4}>
                    <img src={tour.image2} alt="" />
                  </a>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
        <section className="reviews">
          <Container>
            <section className="tour-msg text-center">
              <h1>Đánh giá và Gợi ý</h1>
              <p>Chúng tôi rất vui khi được nghe ý kiến từ bạn.</p>
              <form action="">
                <Row>
                  <Col sm="6">
                    <input
                      type="text"
                      name="Name"
                      id="reviewer-name"
                      placeholder="Your Name"
                      required
                    />
                    <br />
                    <input
                      type="email"
                      name="Email"
                      id="reviewer-email"
                      placeholder="Your email"
                      required
                    />
                  </Col>
                  <Col>
                    <textarea
                      name="Message"
                      id="reviewer-message"
                      rows="4"
                      placeholder="Your Message"
                    />
                  </Col>
                </Row>
                <Button outline color="secondary" className="float-right">
                  Gửi
                </Button>
              </form>
            </section>
          </Container>
        </section>
      </div>
    );
}

export default Tour;
