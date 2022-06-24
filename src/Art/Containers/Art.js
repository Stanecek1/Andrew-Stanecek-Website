
import '../../App.css';
import SlideShowCard from "../Components/SlideShowCard";
import ImageCard from "../Components/ImageCard";
import Plague from "../Images/Plague.png";
import Fox from "../Images/Fox Geo.png"
import Tree from "../Images/SeeingTree.png"
import Skeleton from "../Images/Space Skeleton.png"
import Flower from "../Images/FlowerMouth2.png";
import Pizza from "../Images/Pizza.png";
import Pills from "../Images/Pills.png"
import Banner1 from "../Images/Banner1.png";
import ImageContainer from '../Components/ImageContainer';
import GoodFight from "../Images/Good Fight.png"
import ImageManager from '../ImageManager';
import React, { useState, useEffect } from 'react';



function Art() {
  const [data,setData]=useState([]);
  const getData =()=>{
    fetch('ArtData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log("here" + myJson.art[0].title)
        setData(myJson.art);
      });
  }
  
  useEffect(() => {
    getData();
  }, []);

  const fadeImages = [
    {
    url: Flower,
    caption: 'Run Flowers'
    },
    {
    url: Pills,
    caption: 'UWMA'
    },
    {
    url: Pizza,
    caption: 'Pizza Peye'
    },
  ];

  let images1 = [ <ImageCard title="Dirft" image = {Tree}></ImageCard>, <ImageCard title="Panic" image = {Skeleton}></ImageCard>, <ImageCard title="FOX" image = {Fox}></ImageCard>];
  let images2 = [<ImageCard title="Plague" image = {Plague}></ImageCard>, <SlideShowCard images = {fadeImages} order = "1" color = "Crimson" title = "Lost Collection"></SlideShowCard>, <ImageCard title="Good Fight" image = {GoodFight}></ImageCard> ];

  return (
    <div>
      <div class="bg_image"
      style={{
        backgroundImage:  `url(${Banner1})`,
        backgroundSize: "cover",
        height: "10vw",
        color: "#f5f5f5"
      }}>
        <div className="App">
          {data.length == 0? <div></div> : <h2>{data[0].title}</h2>}
        </div>
      </div>
        <ImageContainer images = {images1}/>
        <ImageContainer images = {images2}/>
    </div>
  );
}

export default Art;