
import '../../App.css';
//import SlideShowCard from "../Components/SlideShowCard";
import ImageCard from "../Components/ImageCard";
import ImageContainer from '../Components/ImageContainer';
import {getPhotoAlbumData} from '../Client';
import React, { useState, useEffect, useCallback } from 'react';
import Banner from '../../Shared/Banner';
import Columns from '../Components/Columns';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


function Art() {
  const [photoList,setPhotoList]=useState([]);
  useEffect(() => {
    getPhotoAlbumData().then(res => {
      setPhotoList(res);
    });
  }, []);

  return (
    <div>
      <Banner title="Strange Art" ></Banner>
      <div className='container-fluid background'>
        <Columns images = {photoList}/>
      </div>
      {/* <Lightbox
        mainSrc={photoList[0].src}
      /> */}
    </div>
  );
}

export default Art;