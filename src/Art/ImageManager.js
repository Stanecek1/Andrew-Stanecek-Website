
import React, { useState, useEffect } from 'react';

class ImageManager extends React.Component {
    // const [data,setData]=useState([]);
    constructor(props){
        super(props);
        this.state ={
            data: ""
        }
    }
    getData=()=>{
        this.setState({data: "yes"}, () => {
            console.log("data " + this.state.data);
        })
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
            //console.log("here" + myJson.art[0].title)
            this.setState({data: myJson.art}, () => {
                console.log("data " + this.state.data);
            });
            return myJson;
            
            
          });
      }
    // useEffect(()=>{
    //     getData();
    //   },[]);

}


    




export default ImageManager;