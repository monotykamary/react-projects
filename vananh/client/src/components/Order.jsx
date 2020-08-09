import React, { useEffect } from 'react';
import Carousel from './Carousel';
import Iframe from 'react-iframe'
import {Helmet} from 'react-helmet'
import ScriptTag from 'react-script-tag';

function Order () {
    return (
        <div>
            <Carousel/>
            <head>
                <title>Đặt vé tàu cao tốc Phú quốc Express</title>
            </head>
            
            <body>
                <Iframe url="https://namtrhg.github.io/testing/"
                width="100%"
                height="600px"
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