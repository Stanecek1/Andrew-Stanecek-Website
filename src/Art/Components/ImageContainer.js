import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import React, { Component } from 'react';
import { ImgOverlay } from 'image-overlay-react'
import 'image-overlay-react/dist/index.css'
import ImageCard from './ImageCard';


class ImageContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    render() {
        //const images = this.props.images;
        // const image1 = this.props.image1;
        // const image2 = this.props.image2;
        // const image3 = this.props.image3;
        const images = this.props.images;
        //this.props.image1.title;
        function getLargestImage(){
          let i = 0; 
          
        }

        return (
        <div className='row image-container m-2'>
          <div className='outer col-4'>
            {images[0]}
          </div>
          <div className='outer col-4'>
            {images[1]}
          </div>
          <div className='outer  col-4'>
            {images[2]}
          </div>
        </div>
        );
    }
}

export default ImageContainer;