import React, { useEffect } from 'react';
import Carousel from './Carousel';
import Iframe from 'react-iframe'
import {Helmet} from 'react-helmet'
import ScriptTag from 'react-script-tag';
import { useScript } from "./useScripts"

function Order () {
    const [loaded, error] = useScript("https://github.com/namtrhg/testing/blob/master/iframeResizer.js")

    React.useEffect(() => {
        if (!loaded) return
    }, [loaded, error])


    return (
        <div>
            <Carousel/>
            <head>
                <title>Đặt vé tàu cao tốc Phú quốc Express </title>
            </head>
            <body>
            {loaded && !error ?
                <Iframe url="https://test.pqe.com.vn?iframe=1"
                width="100%"
                height="600px"
                id="myId"
                className="myClassname"
                display="initial"
                scrolling
                position="relative"/>
                : <b>Something went wrong!</b>}
            </body>     
        </div>
    );
}

export default Order