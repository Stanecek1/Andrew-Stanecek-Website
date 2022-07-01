
import '../../App.css';
//import SlideShowCard from "../Components/SlideShowCard";
import ImageCard from "../Components/ImageCard";
import ImageContainer from '../Components/ImageContainer';
import {getData, getPhotoAlbumData} from '../ImageManager';
import React, { useState, useEffect, useCallback } from 'react';
import Gallery from 'react-photo-gallery-react17';
import Test from '../Components/test';
import Banner from '../../Shared/Banner';


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
      <Banner title="Strange Art" ></Banner>
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