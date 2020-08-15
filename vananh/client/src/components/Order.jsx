import React, { useEffect, useRef, useState } from 'react';
import Carousel2 from './Carousel2'
import IframeResizer from 'iframe-resizer-react'
import "../App.css";
import Footer from './Footer';
import Contact from './Contact';


function Order () {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://raw.githubusercontent.com/davidjbradshaw/iframe-resizer/master/js/iframeResizer.min.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);
      
    return (
        <div className="order">
            <>
      <IframeResizer
        heightCalculationMethod="lowestElement"
        inPageLinks
        log
        checkOrigin="https://test.pqe.com.vn?iframe=1"
        src="https://test.pqe.com.vn?iframe=1"
        style={{ width: '1px', minWidth: '100%'}}
      />
    </>
        </div>
    );
}

export default Order