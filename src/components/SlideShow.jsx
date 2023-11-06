import React, {useState} from 'react'
import '../App.css';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';

function SlideShow(props) {
    return (
            <Fade duration={3000}>
            {
                props.slides.map( (slide) => {
                    return (
                        <div className="each-slide">
                            <img className="slide" src={slide}></img>
                        </div>
                    )
                })
            }
            </Fade>
    )
}

export default SlideShow

// width: 100%;
//   height: 100%;
//   align-content: center;
//   align-items: center;
//   justify-content: center;
//   display: block;