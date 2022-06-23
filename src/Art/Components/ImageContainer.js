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
        
        return (
            <div className="container-fluid">
                <div>

                </div>
            </div>
        );
    }
}

export default SlideShowCard;