import React, {useEffect} from 'react';

class ImageManager {
    getData=()=>{
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
            return myJson;
            
          });
      }
    // useEffect(()=>{
    //     getData();
    //   },[]);

}

    




export default ImageManager;