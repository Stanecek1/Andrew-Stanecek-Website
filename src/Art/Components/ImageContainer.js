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
        const images = this.props.images;
        

        return (

        <div className='row image-container m-2'>
          {images.map(item => {
            return(<div className='outer col-3'> {item} </div>);
          })}
        </div>
        );
    }
}

export default ImageContainer;