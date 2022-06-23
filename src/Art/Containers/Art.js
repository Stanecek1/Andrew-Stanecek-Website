
import '../../App.css';
import Card from '../Components/Card';
import SlideShowCard from "../Components/SlideShowCard";
import ImageCard from "../Components/ImageCard";
import Plague from "../Images/Plague.png";
import Fox from "../Images/Fox Geo.png"
import Tree from "../Images/SeeingTree.png"
import Skeleton from "../Images/Space Skeleton.png"
import Flower from "../Images/FlowerMouth2.png";
import Pizza from "../Images/Pizza.png";
import Pills from "../Images/Pills.png"
import Background from "../Images/Background/PlagueBackground.png"
import ImageContainer from '../Components/ImageContainer';

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

  let plagueIC = <ImageCard title="Plague" image = {Plague}></ImageCard>
  let panicIC = <ImageCard title="Panic" image = {Skeleton}></ImageCard>
  let driftIC = <ImageCard title="Dirft" image = {Tree}></ImageCard>
  let foxIC = <ImageCard title="Fox" image = {Fox}></ImageCard>
  let lostColletionIC = <SlideShowCard images = {fadeImages} order = "1" color = "Crimson" title = "Lost Collection"></SlideShowCard>
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
      <ImageContainer image1={panicIC} image2={driftIC} image3={foxIC}/>
      <ImageContainer image1={plagueIC} image2={lostColletionIC} image3={plagueIC}/>
      {/* <div className="App pt-4">        
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
      </div> */}
    </div>
  );
}

export default Art;