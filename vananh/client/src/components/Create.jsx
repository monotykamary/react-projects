import React from 'react';
import {Link} from "react-router-dom"
import "../App.css";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

function Create() {

  const onclickHandler=()=>{
      
  }

  return (
    <div className="form">
          <ul className="form-container">
            <li>
              <label for="title"><b>Tên gói du lịch(Vd: Bali- Brunei)</b></label>
              <input type="text" placeholder="Enter Title" name="title" required/>
            </li>
            <li>
              <label for="subtitle"><b>Số ngày (Vd: 3 ngày - 6 đêm)</b></label>
              <input type="text" placeholder="Enter Password" name="subtitle" required/>
            </li>
            <li>
              <label for="context"><b>Nội dung</b></label>
              <input type="text" placeholder="Enter Password" name="context" required/>
            </li>
            <li>
              <label for="img1"><b>Đường link ảnh thứ 1</b></label>
              <input type="text" placeholder="Enter Password" name="image" required/>
            </li>
            <li>
              <label for="img2"><b>Đường link ảnh thứ 2</b></label>
              <input type="text" placeholder="Enter Password" name="image2" required/>
            </li>
            <li>
              <label for="img3"><b>Đường link ảnh thứ 3</b></label>
              <input type="text" placeholder="Enter Password" name="image3" required/>
            </li>
            <li>
              <label for="img4"><b>Đường link ảnh thứ 4</b></label>
              <input type="text" placeholder="Enter Password" name="image4" required/>
            </li>
            <li>
              <Button type="submit" onClick={onclickHandler} color='teal' fluid size='large'>
                Submit
              </Button>
            </li>
          </ul>
    </div>
  );
}

export default Create;
