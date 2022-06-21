
import '../../App.css';
import Card from '../Components/Card';
import SlideShowCard from "../Components/SlideShowCard";
import Plague from "../Images/Plague.png";
import Fox from "../Images/Fox Geo.png"
import Tree from "../Images/SeeingTree.png"
import Skeleton from "../Images/Space Skeleton.png"
import Flower from "../Images/FlowerMouth2.png";
import Pizza from "../Images/Pizza.png";
import Pills from "../Images/Pills.png"
import Background from "../Images/Background/PlagueBackground.png"

import ImageManager from '../ImageManager';

// var imageManager = new ImageManager();

// var imageData = imageManager.getData();
// console.log(imageData);
// const images = [];


// imageData.forEach((data) => {
//   var i = 1;
//   images.push(
//     <div className='full-card'>
//       <Card color = "Crimson" order = {i} title = {data.} image = {Plague}></Card>
//     </div>)
//   i++;
//   console.log(data);

//})
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

function Art() {
  return (
    <div 
      // class="bg_image"
      // style={{
      //   backgroundImage:  `url(${Background})`,
      //   backgroundSize: "cover",
      //   height: "100%",
      //   color: "#f5f5f5"
      // }}
    >

      <div className="App pt-4">
        <div className='full-card'>
          <Card color = "Crimson" order = "1" title = "Toxic" image = {Plague}></Card>
        </div>
        <div className='full-card'>
          <Card color = "Black" order = "0" title = "Drift" image = {Tree}></Card>
        </div>
        <div className='full-card'>
          <Card color = "Crimson" order = "1" title = "Panic" image = {Skeleton}></Card>
        </div>
        <div className='full-card'>
          <Card color = "Black" order = "0" title = "Geo" image = {Fox}></Card>
        </div>
        <div className='full-card'>
          <SlideShowCard images = {fadeImages} order = "1" color = "Crimson" title = "Lost Collection"></SlideShowCard>
        </div>
      </div>
    </div>
  );
}

export default Art;