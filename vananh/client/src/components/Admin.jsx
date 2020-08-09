import React, { Component, useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, CardImg, CardText,
  CardBody,CardTitle, CardSubtitle, Button,  Row, CardColumns, Badge } from "reactstrap";
import SecondCarousel from "./Carousel2"
import Tour from "./Tour";
import "../App.css";
import { listTours } from "../actions/tourActions";
import {Link} from "react-router-dom";
import { intersection, isEmpty } from 'lodash';

function Package () {
  const [TourList, setTourList] = useState([]);
  const dispatch = useDispatch();
  const fetchData=async ()=>{
    const ret= await dispatch(listTours());
      if(ret){
          setTourList(ret.data)
          console.log(ret)
          //console.log(ret)
      }
  }
  const [category, setCategory] = useState([]);
  const itemCategories = [
    "tất cả",
    "biển",
    "resort",
    "leo núi",
    "cắm trại",
    "trăng mật",
    "thành phố",
    "trong nước",
    "ngoài nước"
  ];

  const onClickHandler = (badge) => () =>{
    setCategory([badge]);
  }

  const categorySet = new Set(category);
  const filterCategory = (list) => list.filter((tour) => {
    if (isEmpty(category) || categorySet.has("tất cả")) return true;
    if (intersection(tour.category, category).length >= 1) return true;
    return false;
  })

  useEffect(() => {
    fetchData()
  },[]);


  return (
    <div className="subComponent-lg" id="packageBody">
      <SecondCarousel/>
      <Container>
        <header className="headerTitle text-center">
          <h1>Gói Du Lịch</h1>
          <p>Tổng hợp các gói du lịch của chúng tôi</p>
        </header>
        <section className="packageBody text-center">
        {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                onClick={onClickHandler(badge)}
                color={categorySet.has(badge) ? "dark" : "light"}
               >
                {badge}
              </Badge>
            ))}
            <Row className="text-left">
              <CardColumns>
              {filterCategory(TourList).map(tour =>(
                <Card>
                <CardImg top width="100%" src={tour.image} alt={tour.alt} />
                <CardBody>
                <Link to={{pathname: `/tours/${tour._id}`,}} style={{ textDecoration: 'none' }}>
                  <Button outline color="secondary" className="float-right" href="tour">
                    Read more
                  </Button>
                </Link>
                <Link to={{pathname: `/admin/edit/tours/${tour._id}`,}} style={{ textDecoration: 'none' }}>
                  <Button outline color="secondary" className="float-right" href="tour">
                    Edit
                  </Button>
                </Link>
                  <CardTitle>{tour.title}</CardTitle>
                  <CardSubtitle>{tour.subtile}</CardSubtitle>
                </CardBody>
              </Card>))}
              </CardColumns>
            </Row>
          </section>
          </Container>
    </div>
  );
}

export default Package;
