import React, { useEffect } from 'react';
import Carousel from './Carousel';
import Iframe from 'react-iframe'

function Order () {
    return (
        <div>
            <Carousel/>
            <head>
                <title>Đặt vé tàu cao tốc Phú quốc Express</title>
            </head>
            <body>
                <Iframe url="https://test.pqe.com.vn/home"
                width="100%"
                height="400px"
                id="myId"
                className="myClassname"
                display="initial"
                scrolling
                position="relative"/>
            </body>     
        </div>
    );
}

export default Order