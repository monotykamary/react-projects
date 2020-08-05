import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { detailsTours } from "../actions/tourActions";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Carousel2 from './Carousel2'

function Edit(props) {
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

  const onclickHandler=()=>{
      
  }

  return (
      <div>
          <Carousel2></Carousel2>
          <div className="form">
          <ul className="form-container">
            <li>
              <label for="title"><b>Tên gói du lịch</b></label>
              <input type="text" placeholder={tour.title} name="title" required/>
            </li>
            <li>
              <label for="subtitle"><b>Số ngày</b></label>
              <input type="text" placeholder={tour.subtitle} name="subtitle" required/>
            </li>
            <li>
              <label for="context"><b>Nội dung</b></label>
              <input type="text" placeholder={tour.context} name="context" required/>
            </li>
            <li>
              <label for="img1"><b>Đường link ảnh thứ 1</b></label>
              <input type="text" placeholder={tour.image} name="image" required/>
            </li>
            <li>
              <label for="img2"><b>Đường link ảnh thứ 2</b></label>
              <input type="text" placeholder={tour.image2} name="image2" required/>
            </li>
            <li>
              <label for="img3"><b>Đường link ảnh thứ 3</b></label>
              <input type="text" placeholder={tour.image3} name="image3" required/>
            </li>
            <li>
              <label for="img4"><b>Đường link ảnh thứ 4</b></label>
              <input type="text" placeholder={tour.image4} name="image4" required/>
            </li>
            <li>
              <Button type="submit" onClick={onclickHandler} color='teal' fluid size='large'>
                Submit
              </Button>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Edit;
