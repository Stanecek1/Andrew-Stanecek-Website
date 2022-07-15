import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const SoftwareCard = (props) => {    
    
    //Image gallery take an array of objects with a few different parameters
    //but all we need is the "original" parameter for the srcs of the gallery 
    let images = [];
    props.data.src.forEach(element => {
        let src = {original: element}
        images.push(src);
    });

    return(
        <div className="container-fluid border-bottom p-5 mb-5">
            <div className="card border-0">
                <div className="card-body text-center" >
                    <h5 className="card-title mx-auto">{props.data.title}</h5> 
                    <p className='card-text'>{props.data.body}</p>
                </div>
                <ImageGallery className="card-img" items={images} showFullscreenButton={false} showPlayButton={false}/>          
            </div>
        </div>
    );
}

export default SoftwareCard;