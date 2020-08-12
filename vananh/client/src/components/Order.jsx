import React, { useEffect } from 'react';
import Carousel from './Carousel';
import Iframe from 'react-iframe'
import "../App.css";

function Order () {
    return (
        <div className="order">
            <div>
                <h1>Đặt vé tàu cao tốc Phú quốc Express</h1>
            </div>
            <div>
                <Iframe url="https://test.pqe.com.vn/home"
                width="100%"
                height="400px"
                id="myId"
                scrolling="no"
                className="myClassname"
                display="initial"
                scrolling
                position="relative"/>
            </div>     
        </div>
    );
}

export default Order