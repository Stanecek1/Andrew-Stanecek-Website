
import { ImgOverlay } from 'image-overlay-react'

const imgStyle = {
    transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s',
  };

const selectedImgStyle = {
    transform: 'translateZ(0px) scale3d(0.9, 0.9, 1)',
    transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s',
  };

const Test = ({ index, photo, margin, direction, top, left, selected }) => {

        console.log(photo)
        return (
        <div>
          <ImgOverlay
                imgSrc={photo.src}
                bgColor='rgba(52, 52, 52, 0.8)'
                position='right'
                width={photo.imgWidth}
                height={photo.imgHeight}
                opcaity="50%"
                fSize='48px'
                fColor="white"
                >
                {photo.title}
            </ImgOverlay>
        </div>
        );
    
}

export default Test;