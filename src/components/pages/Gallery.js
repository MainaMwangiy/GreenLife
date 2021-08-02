import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import covering from "../assets/covering.jpg"
import planting from "../assets/planting.JPG"
import school from "../assets/school.jpg"
import schoolpri from "../assets/schoolpri.jpg"
import trash2cash from "../assets/Trash2Cash.jpg"

function Gallery() {
    return (
        <div>
            <h1>Image Slider Test</h1>
            <Carousel interval={3500}>
                <Carousel.Item>
                    <img src={require("../assets/addressing.JPG")}  height="300px" alt="picone" width="350px"></img>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={covering}  height="300px" alt="picone" width="350px"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={planting}  height="300px" alt="picone" width="350px"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={school}  height="300px" alt="picone" width="350px"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={schoolpri}  height="300px" alt="picone" width="350px"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={trash2cash}  height="300px" alt="picone" width="350px"></img>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Gallery;
