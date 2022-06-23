import React, { Component } from 'react';
import { ImgOverlay } from 'image-overlay-react'

class ImageCard extends Component {

render() {
    const image = this.props.image;
    const title = this.props.title;
    return (
        <div className="Image-card p-3">
            <ImgOverlay
                imgSrc={image}
                bgColor='rgba(52, 52, 52, 0.8)'
                position='right'
                width='100%'
                height='100%'
                opcaity="50%"
                fSize='48px'
                fColor="white"
                >
                {title}
            </ImgOverlay>
        </div>
    );
  }
}

export default ImageCard;