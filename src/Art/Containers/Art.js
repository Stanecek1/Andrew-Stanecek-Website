
import '../../App.css';
//import SlideShowCard from "../Components/SlideShowCard";
import ImageCard from "../Components/ImageCard";
import ImageContainer from '../Components/ImageContainer';
import {getData, getPhotoAlbumData} from '../ImageManager';
import React, { useState, useEffect, useCallback } from 'react';
import Banner from '../../Shared/Banner';
import Columns from '../Components/Columns';


function Art() {

  // const [imgList,setImgList]=useState([]);
  const [photoList,setPhotoList]=useState([]);
  // const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    // getData().then(res => {
    //   setImgList(res);
    // });

    getPhotoAlbumData().then(res => {
      setPhotoList(res);
    });
  }, []);

  return (
    <div>
      <Banner title="Strange Art" ></Banner>
      <div className='container-fluid'>
        <Columns images = {photoList}/>
      </div>
    </div>
  );
}

export default Art;