
import React, { useState, useEffect } from 'react';
import ImageCard from "./Components/ImageCard";
import fetch from 'cross-fetch';

const getData = function(){
  return new Promise( async function(resolve, reject){
  let list = [];
  await fetch("http://localhost:8080/imageData")
    .then(res => res.json())
    .then(function(respone){
      respone.art.forEach(element => {
        list = list.concat(<ImageCard title={element.title} image = {element.url}></ImageCard>)      
      });
      resolve(list);
    });

    
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
    //save data to list 
    .then(function(myJson) {
      myJson.art.forEach(element => {
        list = list.concat(<ImageCard title={element.title} image = {element.url}></ImageCard>)
      });
      resolve(list);
      
    });
  })
}

export default getData;


    