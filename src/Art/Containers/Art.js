
import '../../App.css';
//import SlideShowCard from "../Components/SlideShowCard";
import ImageCard from "../Components/ImageCard";
//import Plague from "../Images/Plague.png";
//import Fox from "../Images/Fox Geo.png"
//import Tree from "../Images/SeeingTree.png"
//import Skeleton from "../Images/Space Skeleton.png"
import Flower from "../Images/FlowerMouth2.png";
import Pizza from "../Images/Pizza.png";
import Pills from "../Images/Pills.png"
import Banner1 from "../Images/Banner1.png";
import ImageContainer from '../Components/ImageContainer';
//import GoodFight from "../Images/Good Fight.png"
import getData from '../ImageManager';
import React, { useState, useEffect } from 'react';

function Art() {

  const [imgList,setImgList]=useState([]);
  
  useEffect(() => {
    getData().then(res => {
      setImgList(res);
    });

  }, []);

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
        <ImageContainer images = {imgList}/>
    </div>
  );
}

export default Art;