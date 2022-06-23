import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import React, { Component } from 'react';
import { ImgOverlay } from 'image-overlay-react'
import 'image-overlay-react/dist/index.css'


class SlideShowCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        };
    }
    render() {
        //const images = this.props.images;
        const images = this.props.images;
        return (
            <div className="Image-card p-3">
                <Fade>
                    {images.map((Image, index) => (
                    <div className="each-fade" key={index}>
                        <div className="image-container">
                            <ImgOverlay
                                imgSrc={Image.url}
                                bgColor='rgba(52, 52, 52, 0.8)'
                                position='right'
                                width='100%'
                                height='100%'
                                opcaity="50%"
                                fSize='48px'
                                fColor="white"
                                >
                                {Image.caption}
                            </ImgOverlay>
                        </div>
                    </div>
                    ))}
                </Fade>
            </div>
        );
    }
}

export default SlideShowCard;