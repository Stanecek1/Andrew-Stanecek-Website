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
        const title = this.props.title;
        const order = this.props.order;
        const color = this.props.color;
        const images = this.props.images;
        
        
        if (order == 1)
        {
            return (
                <div className="container-fluid">
                    <div className="card">
                        <div className="row">
                            <div className="col-xs-5 col-sm-4 col-md-4 col-lg-4 p-0">
                                <div className="slide-container">
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
                            </div>
                            <div className="card-body col-xs-7 col-sm-4 col-md-4 col-lg-4 d-flex align-items-center " style={{"background-color" : color}}>
                                <h5 className="card-title mx-auto black-drop-shadow">{title}</h5> 
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default SlideShowCard;