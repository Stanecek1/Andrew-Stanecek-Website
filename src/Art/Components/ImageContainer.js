import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import React, { Component } from 'react';
import { ImgOverlay } from 'image-overlay-react'
import 'image-overlay-react/dist/index.css'


class ImageContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    render() {
        //const images = this.props.images;
        const image1 = this.props.image1;
        const image2 = this.props.image2;
        const image3 = this.props.image3;

        return (
        <div className='row border m-2'>
          <div className='col-4'>
            {image1}
          </div>
          <div className='col-4 Image-card'>
            {image2}
          </div>
          <div className='col-4'>
            {image3}
          </div>
        </div>
        );
    }
}

export default ImageContainer;