import React, { useEffect } from 'react';
import Carousel from './Carousel';
import Iframe from 'react-iframe'
import IframeResizer from 'iframe-resizer-react'
import "../App.css";

function Order () {
    return (
        <div className="order">
            <div>
                <h1>Đặt vé tàu cao tốc Phú quốc Express</h1>
            </div>
            <div>
            <IframeResizer
                log
                src="https://www.pqe.com.vn?iframe=1"
                style={{ width: '1px', minWidth: '100%'}}
                />
            </div>     
        </div>
    );
}

export default Order