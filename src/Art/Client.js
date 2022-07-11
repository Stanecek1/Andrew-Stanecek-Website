
import React, { useState, useEffect } from 'react';
import ImageCard from "./Components/ImageCard";
import fetch from 'cross-fetch';

// export const getData = function(){
//   return new Promise( async function(resolve, reject){
//   let list = [];
//   await fetch("http://localhost:8080/imageData")
//     .then(res => res.json())
//     .then(function(respone){
//       respone.art.forEach(element => {
//         list = list.concat(<ImageCard title={element.title} image = {element.url}></ImageCard>)      
//       });
//       resolve(list);
//     });
//   })
// }

export const getPhotoAlbumData = function(){
  return new Promise( async function(resolve, reject){
  await fetch("http://localhost:8080/imageData")
    .then(res => res.json())
    .then(function(respone){
      let photos = [];
      respone.art.forEach(element => {
        let data = {src: element.url , imgWidth: element.width, imgHeight: element.height, title: element.title}
        //console.log(data);
        photos = photos.concat(data)
      });
      resolve(photos); 
    });
  })
}

export const getSoftwareData = function(){
  return new Promise( async function(resolve, reject){
    await fetch("http://localhost:8080/softwareData")
    .then(res => res.json())
    .then(function(response){
      console.log("Software Response: " + response);
      let softwareData = [];
      response.softwareData.projects.forEach(element => {
        let data = {src: element.urls, body: element.body, title: element.title}
        softwareData = softwareData.concat(data)
      });
      resolve(softwareData); 
    });
  })
}




    