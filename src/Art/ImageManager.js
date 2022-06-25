
import React, { useState, useEffect } from 'react';
import ImageCard from "./Components/ImageCard";

const getData = function(){
  return new Promise(function(resolve, reject){
  let list = [];
  fetch('ArtData.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
  })
    //parse json data
    .then(function(response){
      return response.json();
    })
    //save data to state
    .then(function(myJson) {
      myJson.art.forEach(element => {
        list = list.concat(<ImageCard title={element.title} image = {element.url}></ImageCard>)
      });
      
      resolve(list);
    });
  })

}

export default getData;


    