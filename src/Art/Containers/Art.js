
import '../../App.css';
//import SlideShowCard from "../Components/SlideShowCard";
import ImageCard from "../Components/ImageCard";
import Banner1 from "../Images/Banner1.png";
import ImageContainer from '../Components/ImageContainer';
import {getData, getPhotoAlbumData} from '../ImageManager';
import React, { useState, useEffect, useCallback } from 'react';
import Gallery from 'react-photo-gallery-react17';
import Test from '../Components/test';


import { PhotoProvider, PhotoView } from 'react-photo-view';

function Art() {

  const [imgList,setImgList]=useState([]);
  const [photoListt,setPhotoList]=useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    getData().then(res => {
      setImgList(res);
    });

    getPhotoAlbumData().then(res => {
      setPhotoList(res);
    });

  }, []);

  const imageRenderer = useCallback(
    ({ index, left, top, key, containerHeight, photo }) => (
      <Test photo={photo} />
    ),
    [selectAll]
  );


  return (
    <div>
      <div class="bg_image"
      style={{
        backgroundImage:  `url(${Banner1})`,
        backgroundSize: "cover",
        height: "10vw",
        color: "#f5f5f5"
      }}>
      </div>
      {/* <div>
      <Gallery renderImage={imageRenderer} photos={photoListt} />
      </div> */}
      <div className='container-fluid'>
        <ImageContainer images = {imgList}/>
      </div>
      
        
        {/* <PhotoProvider>
          <div>
            {photoListt.map((item, index) => (
            <PhotoView key={index} src={item.src}>
              <img src={item.src} alt="" />
            </PhotoView>
            ))}
          </div>
        </PhotoProvider> */}
    </div>
  );
}

export default Art;