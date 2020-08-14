import React, { useEffect } from 'react';
import Carousel2 from './Carousel2'
import IframeResizer from 'iframe-resizer-react'
import "../App.css";
import Footer from './Footer';
import Contact from './Contact';

function Order () {
    return (
        <div className="order">
            <div>
                <h1>Đặt vé Du Lịch Vân Anh</h1>
            </div>
            <div>
            <IframeResizer
                log
                src="https://www.pqe.com.vn?iframe=1"
                style={{ width: '1px', minWidth: '100%'}}
                />
            </div>
            <Contact/>
            <Footer/>    
        </div>
    );
}

export default Order