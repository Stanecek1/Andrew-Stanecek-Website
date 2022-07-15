import fetch from 'cross-fetch';

//function to get the art data json file from the server and return it as array of objects
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

//function to get the software data json file from the server and return it as array of objects
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
